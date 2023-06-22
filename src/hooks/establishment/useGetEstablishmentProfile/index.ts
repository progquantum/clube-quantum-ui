import { AxiosError } from 'axios';

import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { ResponseData } from './types';

const QUERY_KEY_GET_ESTABLISHMENT_PROFILE = 'get-establishment-profile';

export async function getEstablishmentProfile({ queryKey }) {
  const [_, establishmentId] = queryKey;

  try {
    const { data } = await quantumClientQueue.get<ResponseData>(
      '/establishment/profile/',
      establishmentId,
    );
    return data;
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      console.log(err);
    }
    return Promise.reject(err);
  }
}

export function useGetEstablishmentProfile(establishmentId: string) {
  return useQuery(
    [QUERY_KEY_GET_ESTABLISHMENT_PROFILE, establishmentId],
    getEstablishmentProfile,
  );
}
