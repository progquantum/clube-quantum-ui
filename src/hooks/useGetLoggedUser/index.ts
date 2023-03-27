import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { LoggedUser } from './types';

export const QUERY_KEY_GET_LOGGED_USER = 'get-logged-user';

export async function getLoggedUser() {
  try {
    const { data } = await quantumClientQueue.get<LoggedUser>(
      '/tim/get-logged-user',
    );

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error);
      return Promise.reject(error);
    }
    return Promise.reject(error);
  }
}

export function useGetLoggedUser() {
  return useQuery([QUERY_KEY_GET_LOGGED_USER], getLoggedUser);
}
