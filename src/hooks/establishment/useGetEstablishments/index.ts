import { useQuery } from 'react-query';

import { AxiosError } from 'axios';

import { quantumClientQueue } from 'config/client';

import { RequestBody, ResponseData } from './types';

export const QUERY_KEY_GET_ESTABLISHMENTS = 'get-establishments';

export async function getEstablishments({ queryKey }) {
  const [_, requestBody] = queryKey;
  const params = new URLSearchParams();

  Object.keys(requestBody).forEach((key: string) => {
    if (requestBody[key]) params.append(key, requestBody[key]);
  });

  try {
    const { data } = await quantumClientQueue.get<ResponseData>(
      `/establishment/paginate`,
      { params },
    );

    return data;
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.log(error);
    }
    return Promise.reject(error);
  }
}

export function useGetEstablishments(requestBody: RequestBody) {
  return useQuery(
    [QUERY_KEY_GET_ESTABLISHMENTS, requestBody],
    getEstablishments,
  );
}
