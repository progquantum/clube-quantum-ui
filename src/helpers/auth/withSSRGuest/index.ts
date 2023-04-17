import {
  GetServerSideProps,
  GetServerSidePropsContext,
  GetServerSidePropsResult,
} from 'next';
import { parseCookies } from 'nookies';
import decode from 'jwt-decode';

import { TOKEN_STORAGE_KEY } from 'constants/storage';
import { DASHBOARD_ADM_PAGE, DASHBOARD_PAGE } from 'constants/routesPath';
import { TokenPayload } from 'shared/types/apiSchema';
import { roles } from 'constants/roles';

export function withSSRGuest<T>(fn: GetServerSideProps<T>) {
  return async (
    ctx: GetServerSidePropsContext,
  ): Promise<GetServerSidePropsResult<T>> => {
    const cookies = parseCookies(ctx);

    const token = cookies[TOKEN_STORAGE_KEY];

    if (token) {
      const { user_role } = decode<TokenPayload>(token);
      if (user_role === roles.admin.id) {
        return {
          redirect: {
            destination: DASHBOARD_ADM_PAGE,
            permanent: false,
          },
        };
      }

      if (user_role === roles.user.id) {
        return {
          redirect: {
            destination: DASHBOARD_PAGE,
            permanent: false,
          },
        };
      }
    }

    return await fn(ctx);
  };
}
