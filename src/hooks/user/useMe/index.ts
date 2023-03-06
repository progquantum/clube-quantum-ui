import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { User } from 'shared/types/apiSchema';

export const QUERY_KEY_FIND_ME = 'me';

export async function getMe() {
  try {
    const { data } = await quantumClientQueue.get('/me');
    return data as User;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(error);
    }
  }
}

export function useMe() {
  return useQuery([QUERY_KEY_FIND_ME], getMe);
}
