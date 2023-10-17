import { AxiosError } from 'axios';

import { useMutation } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { Establishment } from './types';

export async function upsertEstablishment(establishment: Establishment) {
  try {
    await quantumClientQueue.post('/establishment/upsert', establishment);
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.log(error);
    }

    return Promise.reject(error);
  }
}

export function useUpsertEstablishment() {
  return useMutation(upsertEstablishment);
}
