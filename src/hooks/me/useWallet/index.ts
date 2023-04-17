import { useQuery } from 'react-query';

import { Wallet } from 'shared/types/apiSchema';
import { quantumClientQueue } from 'config/client';

export const QUERY_KEY_WALLET = 'me-billing';

export async function getWallet() {
  const { data } = await quantumClientQueue.get('/me/billing');

  return data as Wallet;
}

export function useWallet() {
  return useQuery(QUERY_KEY_WALLET, getWallet);
}
