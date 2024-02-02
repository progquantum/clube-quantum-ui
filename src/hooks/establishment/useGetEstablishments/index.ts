import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { RequestBody, ResponseData } from './types';

export const QUERY_KEY_GET_ESTABLISHMENTS = 'get-establishments';

export async function getEstablishments({ queryKey }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
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
    return Promise.reject(error);
  }
}

export function useGetEstablishments(requestBody: RequestBody) {
  return useQuery(
    [QUERY_KEY_GET_ESTABLISHMENTS, requestBody],
    getEstablishments,
  );
}
