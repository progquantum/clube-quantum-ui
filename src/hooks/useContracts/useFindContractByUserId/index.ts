import { AxiosError } from 'axios';

import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { ResponseData } from './types';

export const QUERY_KEY_GET_CONTRACTS_LOGGED_USER = 'get-contracts-logged-user';

export async function getContractsLoggedUser() {
  try {
    const { data } = await quantumClientQueue.get<ResponseData>(
      '/contracts/find-contract-by-user_id',
    );

    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.log(error);
    }
    return Promise.reject(error);
  }
}

export function useGetContractsLoggedUser() {
  return useQuery(
    [QUERY_KEY_GET_CONTRACTS_LOGGED_USER],
    getContractsLoggedUser,
  );
}
