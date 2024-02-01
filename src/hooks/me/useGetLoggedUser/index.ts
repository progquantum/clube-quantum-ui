import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { LoggedUser } from './types';

export const QUERY_KEY_GET_LOGGED_USER = 'get-logged-user';

export async function getLoggedUser() {
  try {
    const { data } = await quantumClientQueue.get<LoggedUser>(
      '/me/ordering-data',
    );

    return data;
  } catch (error: unknown) {
    return Promise.reject(error);
  }
}

export function useGetLoggedUser() {
  return useQuery([QUERY_KEY_GET_LOGGED_USER], getLoggedUser);
}
