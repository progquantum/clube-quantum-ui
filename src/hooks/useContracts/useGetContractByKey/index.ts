import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { ResponseData } from './types';

export const QUERY_KEY_GET_CONTRACT_BY_KEY = 'get-contract-by-key';

export async function getContractByKey({ queryKey }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, documentKey] = queryKey;

  try {
    const { data } = await quantumClientQueue.get<ResponseData>(
      `/contracts/find-contract-by-key/${documentKey}`,
    );

    return data;
  } catch (error: unknown) {
    return Promise.reject(error);
  }
}

export function useGetContractByKey(documentKey: string) {
  return useQuery(
    [QUERY_KEY_GET_CONTRACT_BY_KEY, documentKey],
    getContractByKey,
  );
}
