import { GetServerSidePropsContext } from 'next';
import { parseCookies, setCookie } from 'nookies';
import axios, { AxiosError } from 'axios';

import {
  REFRESH_TOKEN_STORAGE_KEY,
  TOKEN_STORAGE_KEY,
} from 'constants/storage';

import { error as notifyError } from 'helpers/notify/error';
import { logOut } from 'helpers/auth/logOut';

let isRefreshing = false;
let failedRequestsQueue: {
  onSuccess(token: string): void;
  onFailure(error: AxiosError): void;
}[] = [];

export function baseInstance() {
  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_HOST,
  });

  api.interceptors.response.use(
    response => response,
    (error: AxiosError) => {
      const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

      if (!expectedError) {
        notifyError('Encontramos um problema por aqui.');
      }

      return Promise.reject(error);
    },
  );

  return api;
}

export function queueInstance(
  ctx: GetServerSidePropsContext | undefined = undefined,
) {
  let cookies = parseCookies(ctx);

  const token = cookies[TOKEN_STORAGE_KEY];

  const api = axios.create({
    baseURL: process.env.NEXT_PUBLIC_API_HOST,
  });

  api.defaults.headers.common.Authorization = `Bearer ${token}`;

  api.interceptors.response.use(
    response => response,
    (error: AxiosError) => {
      const expectedError =
        error.response &&
        error.response.status >= 400 &&
        error.response.status < 500;

      if (!expectedError) {
        notifyError('Encontramos um problema por aqui.');
      }

      if (error.response.status === 401) {
        cookies = parseCookies(ctx);

        const { '@ClubeQuantum:refresh_token': refresh_token } = cookies;
        const originalConfig = error.config;

        if (!isRefreshing) {
          isRefreshing = true;

          api
            .put('/refresh-tokens', {
              refresh_token,
            })
            .then(response => {
              const { token, refresh_token } = response.data;

              setCookie(ctx, TOKEN_STORAGE_KEY, token, {
                maxAge: 60 * 60 * 24 * 30,
                path: '/',
              });

              setCookie(ctx, REFRESH_TOKEN_STORAGE_KEY, refresh_token, {
                maxAge: 60 * 60 * 24 * 30,
                path: '/',
              });

              api.defaults.headers.common.Authorization = `Bearer ${token}`;

              failedRequestsQueue.forEach(request => request.onSuccess(token));
              failedRequestsQueue = [];
            })
            .catch((error: AxiosError) => {
              isRefreshing = false;

              failedRequestsQueue.forEach(request => request.onFailure(error));
              failedRequestsQueue = [];

              if (process.browser) {
                logOut();
              }
            })
            .finally(() => {
              isRefreshing = false;
            });
        }

        return new Promise((resolve, reject) => {
          failedRequestsQueue.push({
            onSuccess: (token: string) => {
              originalConfig.headers.Authorization = `Bearer ${token}`;

              resolve(api(originalConfig));
            },
            onFailure: (error: AxiosError) => {
              reject(error);
            },
          });
        });
      }
      // if (process.browser){
      //   logOut();
      // } else {
      //   return Promise.reject(new AuthTokenError());
      // }

      return Promise.reject(error);
    },
  );

  return api;
}
