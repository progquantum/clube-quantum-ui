import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { Data } from './types';

export const QUERY_KEY_PARTNERS_LIST = 'QUERY_KEY_PARTNERS_LIST';

export async function getPartnersList() {
  try {
    const { data } = await quantumClientQueue.get('/partners/partners-list');
    return data as Data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(error);
    }
  }
}

export function usePartnersList() {
  return useQuery([QUERY_KEY_PARTNERS_LIST], getPartnersList);
}
