import { AxiosError } from 'axios';

import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

const QUERY_KEY_GET_CONTRACT_STATUS = 'get-contract-status';

export async function getContractStatus({ queryKey }) {
  const [_, documentKey] = queryKey;
  try {
    const { data } = await quantumClientQueue.get<string>(
      `/contracts/status/${documentKey}`,
    );
    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.log(error);
    }
    return Promise.reject(error);
  }
}

export function useGetContractStatus(documentKey: string) {
  if (!documentKey) return;
  return useQuery(
    [QUERY_KEY_GET_CONTRACT_STATUS, documentKey],
    getContractStatus,
  );
}
