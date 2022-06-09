import { AxiosPromise, AxiosRequestConfig } from 'axios'

import { REFRESH_TOKEN_STORAGE_KEY, TOKEN_STORAGE_KEY } from 'constants/storage'

import { api } from 'config/client'

let failedRequestsQueue: any[] = []

api.interceptors.request.use((config): AxiosRequestConfig => {
  const token = localStorage?.getItem(TOKEN_STORAGE_KEY)

  config.headers.Authorization = `Bearer ${token}`

  return config
}, error => {
  Promise.reject(error)
})

api.interceptors.response.use((response) => response, error => {
  const originalRequestConfig = error?.config

  if (error.response.status === 403 && !originalRequestConfig._retry) {
    originalRequestConfig._retry = true

    return api.post('/auth/refresh-tokens', {
      refresh_token: localStorage?.getItem(REFRESH_TOKEN_STORAGE_KEY)
    }).then((postResponse): AxiosPromise<AxiosRequestConfig> | undefined => {
      const newToken = postResponse?.data?.token
      const newRefreshToken = postResponse?.data?.refresh_token

      localStorage.setItem(TOKEN_STORAGE_KEY, newToken)
      localStorage.setItem(REFRESH_TOKEN_STORAGE_KEY, newRefreshToken)

      api.defaults.headers.common.Authorization = `Bearer ${newToken}`

      failedRequestsQueue.forEach(request => request.onSuccess(newToken))

      failedRequestsQueue = []

      return api(originalRequestConfig)
    }).catch(error => {
      failedRequestsQueue.forEach(request => request.onFailure(error))
      failedRequestsQueue = []
    })
  }

  return Promise.reject(error)
})
