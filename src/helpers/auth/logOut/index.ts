// eslint-disable-next-line import/no-named-as-default
import Router from 'next/router';
import { destroyCookie } from 'nookies';

import { QueryClient } from 'react-query';

import {
  TOKEN_STORAGE_KEY,
  REFRESH_TOKEN_STORAGE_KEY,
} from 'constants/storage';
import { SIGN_IN_PAGE } from 'constants/routesPath';

export function logOut(queryClient: QueryClient) {
  destroyCookie(undefined, TOKEN_STORAGE_KEY);
  destroyCookie(undefined, REFRESH_TOKEN_STORAGE_KEY);
  queryClient.clear();
  Router.push(SIGN_IN_PAGE);
}
