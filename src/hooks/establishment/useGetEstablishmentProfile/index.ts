import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { ResponseData } from './types';

export const QUERY_KEY_GET_ESTABLISHMENT_PROFILE = 'get-establishment-profile';

export async function getEstablishmentProfile({ queryKey }) {
  // eslint-disable-next-line @typescript-eslint/no-unused-vars
  const [_, establishmentId] = queryKey;

  try {
    const { data } = await quantumClientQueue.get<ResponseData>(
      `/establishment/profile/${establishmentId}`,
    );
    return data;
  } catch (error: unknown) {
    return Promise.reject(error);
  }
}

export function useGetEstablishmentProfile(establishmentId: string) {
  return useQuery(
    [QUERY_KEY_GET_ESTABLISHMENT_PROFILE, establishmentId],
    getEstablishmentProfile,
  );
}
