import { useQuery } from 'react-query';

import { AxiosError } from 'axios';

import { Wallet } from 'shared/types/apiSchema';
import { quantumClientQueue } from 'config/client';

export const QUERY_KEY_WALLET = 'me-billing';

export async function getWallet() {
  try {
    const { data } = await quantumClientQueue.get('/me/billing');

    return data as Wallet;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.log(error);
    }
    return Promise.reject(error);
  }
}

export function useWallet() {
  return useQuery([QUERY_KEY_WALLET], getWallet);
}
