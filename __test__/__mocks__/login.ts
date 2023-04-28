import { setCookie } from 'nookies';

import {
  REFRESH_TOKEN_STORAGE_KEY,
  TOKEN_STORAGE_KEY,
} from 'constants/storage';

import { quantumClientQueue } from 'config/client';
import { signIn } from 'hooks/auth/useSignIn';

export const setup = async () => {
  const login = process.env.NEXT_PUBLIC_LOGIN;
  const password = process.env.NEXT_PUBLIC_PASSWORD;
  const data = await signIn({ login, password });
  const { token, refresh_token } = data;
  const ONE_MONTH_IN_SECONDS = 60 * 60 * 24 * 30;

  setCookie(undefined, TOKEN_STORAGE_KEY, token, {
    maxAge: ONE_MONTH_IN_SECONDS,
    path: `/`,
  });

  setCookie(undefined, REFRESH_TOKEN_STORAGE_KEY, refresh_token, {
    maxAge: ONE_MONTH_IN_SECONDS,
    path: `/`,
  });

  quantumClientQueue.defaults.headers.common.Authorization = `Bearer ${token}`;
};
