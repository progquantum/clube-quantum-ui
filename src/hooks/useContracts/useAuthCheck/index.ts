import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

const QUERY_KEY_GET_AUTH_CHECK = 'get-auth-check';

export async function getAuthCheck() {
  try {
    await quantumClientQueue.get('/contracts/auth-check');
  } catch (error: unknown) {
    return Promise.reject(error);
  }
}

export function useGetAuthCheck() {
  return useQuery([QUERY_KEY_GET_AUTH_CHECK], getAuthCheck);
}
