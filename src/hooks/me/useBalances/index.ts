import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { BalancesPayload } from './types';

const QUERY_KEY_BALANCE = 'balance';

export async function getBalances() {
  const { data } = await quantumClientQueue.get('/me/balances');

  return data as BalancesPayload;
}

export function useBalances() {
  return useQuery(QUERY_KEY_BALANCE, getBalances);
}
