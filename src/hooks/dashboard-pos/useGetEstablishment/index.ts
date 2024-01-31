import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { Establishiment } from './types';

export const QUERY_KEY_GET_POS_ESTABLISHMENT =
  'QUERY_KEY_GET_POS_ESTABLISHMENT';

export async function getEstablishment() {
  try {
    const { data } = await quantumClientQueue.get(
      '/dashboard-pos/establishment',
    );
    return data as Establishiment;
  } catch (error: unknown) {
    return Promise.reject(error);
  }
}

export function useGetEstablishment() {
  return useQuery([QUERY_KEY_GET_POS_ESTABLISHMENT], getEstablishment);
}
