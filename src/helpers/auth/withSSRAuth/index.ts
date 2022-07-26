import { GetServerSideProps, GetServerSidePropsContext, GetServerSidePropsResult } from 'next'
import { destroyCookie, parseCookies } from 'nookies'

import { TOKEN_STORAGE_KEY, REFRESH_TOKEN_STORAGE_KEY } from 'constants/storage'
import { SIGN_IN_PAGE } from 'constants/routesPath'

export function withSSRAuth<P> (fn: GetServerSideProps<P>) {
  return async (ctx: GetServerSidePropsContext): Promise<GetServerSidePropsResult<P>> => {
    const cookies = parseCookies(ctx)

    const token = cookies[TOKEN_STORAGE_KEY]

    if (!token) {
      return {
        redirect: {
          destination: SIGN_IN_PAGE,
          permanent: false
        }
      }
    }

    try {
      return await fn(ctx)
    } catch {
      destroyCookie(ctx, TOKEN_STORAGE_KEY)
      destroyCookie(ctx, REFRESH_TOKEN_STORAGE_KEY)

      return {
        redirect: {
          destination: SIGN_IN_PAGE,
          permanent: false
        }
      }
    }
  }
}
