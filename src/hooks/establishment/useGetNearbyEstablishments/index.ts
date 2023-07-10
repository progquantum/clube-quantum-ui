import { AxiosError } from 'axios';

import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { RequestBody, ResponseData } from './types';

const QUERY_KEY_GET_NEARBY_ESTABLISHMENTS = 'get-nearby-establishments';

export async function getNearbyEstablishments({ queryKey }) {
  const [_, requestBody] = queryKey;
  try {
    const { data } = await quantumClientQueue.get<ResponseData>(
      '/establishments/maps',
      requestBody,
    );

    return data;
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      console.log(err);
    }
    return Promise.reject(err);
  }
}

export function useGetNearbyEstablishments(requestBody: RequestBody) {
  return useQuery(
    [QUERY_KEY_GET_NEARBY_ESTABLISHMENTS, requestBody],
    getNearbyEstablishments,
  );
}
