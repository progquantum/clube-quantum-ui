import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { BalancesPayload } from './types';

const QUERY_KEY_BALANCE = 'balance';

export async function getBalances() {
  try {
    const { data } = await quantumClientQueue.get('/me/balances');

    return data as BalancesPayload;
  } catch (err: unknown) {
    return Promise.reject(err);
  }
}

export function useBalances() {
  return useQuery(QUERY_KEY_BALANCE, getBalances, { retry: false });
}
