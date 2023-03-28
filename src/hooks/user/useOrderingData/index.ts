import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { UserOrderingData } from './types';

export const QUERY_KEY_ORGERING_DATA = 'QUERY_KEY_ORGERING_DATA';

export async function getMeOrderingData() {
  try {
    const { data } = await quantumClientQueue.get('/me/ordering-data');
    return data as UserOrderingData;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(error);
    }
  }
}

export function useMeOrderingData() {
  return useQuery([QUERY_KEY_ORGERING_DATA], getMeOrderingData);
}
