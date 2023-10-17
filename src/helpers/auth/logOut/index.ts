// eslint-disable-next-line import/no-named-as-default
import Router from 'next/router';
import { destroyCookie } from 'nookies';

import { useQueryClient } from 'react-query';

import {
  TOKEN_STORAGE_KEY,
  REFRESH_TOKEN_STORAGE_KEY,
} from 'constants/storage';
import { SIGN_IN_PAGE } from 'constants/routesPath';

export function logOut() {
  destroyCookie(undefined, TOKEN_STORAGE_KEY);
  destroyCookie(undefined, REFRESH_TOKEN_STORAGE_KEY);
  const queryClient = useQueryClient();
  queryClient.clear();
  Router.push(SIGN_IN_PAGE);
}
