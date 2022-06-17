// eslint-disable-next-line import/no-named-as-default
import Router from 'next/router'
import { destroyCookie } from 'nookies'

import { TOKEN_STORAGE_KEY, REFRESH_TOKEN_STORAGE_KEY } from 'constants/storage'

export function logOut () {
  destroyCookie(undefined, TOKEN_STORAGE_KEY)
  destroyCookie(undefined, REFRESH_TOKEN_STORAGE_KEY)

  Router.push('/')
}
