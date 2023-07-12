import { AxiosError } from 'axios';

import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { ResponseData } from './types';

const QUERY_KEY_GET_NEARBY_ESTABLISHMENTS = 'get-nearby-establishments';

export async function getNearbyEstablishments({ queryKey }) {
  const [_, userLocation] = queryKey;
  if (!userLocation) return;

  const queryParams = new URLSearchParams({ userOrigin: userLocation });

  try {
    const { data } = await quantumClientQueue.get<ResponseData>(
      '/establishment/maps',
      { params: queryParams },
    );

    return data;
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      console.log(err);
    }
    return Promise.reject(err);
  }
}

export function useGetNearbyEstablishments(userLocation: string) {
  return useQuery(
    [QUERY_KEY_GET_NEARBY_ESTABLISHMENTS, userLocation],
    getNearbyEstablishments,
    { retryDelay: 4000 },
  );
}
