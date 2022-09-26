import { useQuery, UseQueryOptions } from 'react-query';

import { Wallet } from 'shared/types/apiSchema';
import { quantumClientQueue } from 'config/client';

export const QUERY_KEY_FIND_BILLING = 'me-billing';

export async function getWallet() {
  const { data } = await quantumClientQueue.get('/me/billing');

  return data as Wallet;
}

export function useWallet(options?: UseQueryOptions<Wallet>) {
  return useQuery(QUERY_KEY_FIND_BILLING, getWallet, options);
}
