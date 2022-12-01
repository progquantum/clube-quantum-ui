import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { parseCookies } from 'nookies';

import { TOKEN_STORAGE_KEY } from 'constants/storage';
import { DASHBOARD_PAGE } from 'constants/routesPath';

export function withSSRGuest<T>(fn: GetServerSideProps<T>) {
  return async (
    ctx: GetServerSidePropsContext,
  ): Promise<GetServerSidePropsResult<T>> => {
    const cookies = parseCookies(ctx);

    const token = cookies[TOKEN_STORAGE_KEY];

    if (token) {
      return {
        redirect: {
          destination: DASHBOARD_PAGE,
          permanent: false,
        },
      };
    }

    return await fn(ctx);
  };
}
