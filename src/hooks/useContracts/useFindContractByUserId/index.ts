import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { ContractsLoggedUserProps, ResponseData } from './types';

export const QUERY_KEY_GET_CONTRACTS_LOGGED_USER = 'get-contracts-logged-user';

export async function getContractsLoggedUser({
  contractName,
}: ContractsLoggedUserProps) {
  try {
    const { data } = await quantumClientQueue.get<ResponseData>(
      '/contracts/find-contract-by-user_id',
      {
        params: {
          ...(contractName ? { contractName } : {}),
        },
      },
    );

    return data;
  } catch (error: unknown) {
    return Promise.reject(error);
  }
}

export function useGetContractsLoggedUser({
  contractName,
}: ContractsLoggedUserProps) {
  return useQuery([QUERY_KEY_GET_CONTRACTS_LOGGED_USER, contractName], () =>
    getContractsLoggedUser({ contractName }),
  );
}
