import { useQuery } from 'react-query';

import { AxiosError } from 'axios';

import { quantumClientQueue } from 'config/client';

import { error } from 'helpers/notify/error';

import { BalancesPayload } from './types';

const QUERY_KEY_BALANCE = 'balance';

export async function getBalances() {
  try {
    const { data } = await quantumClientQueue.get('/me/balances');

    return data as BalancesPayload;
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      error(err.response.data.message);
    }
  }
}

export function useBalances() {
  return useQuery(QUERY_KEY_BALANCE, getBalances, { retry: false });
}
