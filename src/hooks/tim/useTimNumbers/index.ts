import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { TimNumber } from './types';

export const QUERY_KEY_GET_TIM_NUMBERS = 'get-tim-numbers';

export async function getTimNumbers({ queryKey }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, code] = queryKey;
  if (!code) return;
  try {
    const { data } = await quantumClientQueue.get<TimNumber[]>(
      `/tim/tim-numbers/${code}`,
    );

    return data;
  } catch (err: unknown) {
    return Promise.reject(err);
  }
}

export function useGetTimNumbers(code: string) {
  return useQuery({
    queryKey: [QUERY_KEY_GET_TIM_NUMBERS, code],
    queryFn: getTimNumbers,
    retry: 1,
  });
}
