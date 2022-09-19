import { GetServerSidePropsContext } from 'next'
import { parseCookies, setCookie } from 'nookies'
import axios, { AxiosError } from 'axios'

import { REFRESH_TOKEN_STORAGE_KEY, TOKEN_STORAGE_KEY } from 'constants/storage'
import { AuthTokenError } from 'shared/errors/AuthTokenError'
import { error as notifyError } from 'helpers/notify/error'
import { logOut } from 'helpers/auth/logOut'
import { UNAUTHORIZED_ROUTES } from 'constants/unauthorizedRoutes'

let isRefreshing = false
let failedRequestsQueue: {
  onSuccess (token: string): void
  onFailure (error: AxiosError): void
}[] = []

export function setupAPIClient (ctx: GetServerSidePropsContext | undefined = undefined) {
  let cookies = parseCookies(ctx)

  const token = cookies[TOKEN_STORAGE_KEY]

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_HOST,
    headers: {
      Authorization: `Bearer ${token}`
    }
  })

  api.interceptors.response.use(
    (response) => {
      return response
    },
    (error: AxiosError) => {
      const expectedError = error.response && error.response.status >= 400 && error.response.status < 500

      if (!expectedError) {
        notifyError('Encontramos um problema por aqui.')
      }

      const unauthorizedRoutes = UNAUTHORIZED_ROUTES.includes(error.response.config.url) && (
        error.response.config.method === 'post' || error.response.config.method === 'patch')

      if (unauthorizedRoutes) {
        return Promise.reject(error)
      }

      if (error.response.status === 401) {
        cookies = parseCookies(ctx)

        const { '@ClubeQuantum:refresh_token': refresh_token } = cookies
        const originalConfig = error.config

        if (!isRefreshing) {
          isRefreshing = true

          api.put('/refresh-tokens', {
            refresh_token
          }).then((response) => {
            const { token, refresh_token } = response.data

            setCookie(ctx, TOKEN_STORAGE_KEY, token, {
              maxAge: 60 * 60 * 24 * 30,
              path: '/'
            })

            setCookie(ctx, REFRESH_TOKEN_STORAGE_KEY, refresh_token, {
              maxAge: 60 * 60 * 24 * 30,
              path: '/'
            })

            api.defaults.headers.common.Authorization = `Bearer ${token}`

            failedRequestsQueue.forEach((request) => request.onSuccess(token))
            failedRequestsQueue = []
          }).catch((error: AxiosError) => {
            isRefreshing = false

            failedRequestsQueue.forEach((request) => request.onFailure(error))
            failedRequestsQueue = []

            if (process.browser) {
              logOut()
            }
          }).finally(() => {
            isRefreshing = false
          })
        }

        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            onSuccess: (token: string) => {
              originalConfig.headers.Authorization = `Bearer ${token}`

              resolve(api(originalConfig))
            },
            onFailure: (error: AxiosError) => {
              reject(error)
            }
          })
        })
      } else {
        if (process.browser) {
          logOut()
        } else {
          return Promise.reject(new AuthTokenError())
        }
      }

      return Promise.reject(error)
    }
  )

  return api
}
