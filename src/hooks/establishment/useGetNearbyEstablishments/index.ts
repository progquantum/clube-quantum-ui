import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { GetNearbyEstablishmentsParams, ResponseData } from './types';

const QUERY_KEY_GET_NEARBY_ESTABLISHMENTS = 'get-nearby-establishments';

export async function getNearbyEstablishments(
  params: GetNearbyEstablishmentsParams,
) {
  if (!params.userOrigin) return;

  const queryParams = new URLSearchParams(params);

  try {
    const { data } = await quantumClientQueue.get<ResponseData>(
      '/establishment/maps',
      { params: queryParams },
    );

    return data;
  } catch (err: unknown) {
    return Promise.reject(err);
  }
}

export function useGetNearbyEstablishments(
  params: GetNearbyEstablishmentsParams,
) {
  return useQuery(
    [QUERY_KEY_GET_NEARBY_ESTABLISHMENTS, params],
    () => getNearbyEstablishments(params),
    { retryDelay: 4000 },
  );
}
