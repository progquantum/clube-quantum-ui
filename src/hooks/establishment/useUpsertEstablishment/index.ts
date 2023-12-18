import { AxiosError } from 'axios';

import { useMutation } from 'react-query';

import { error } from 'helpers/notify/error';
import { quantumClientQueue } from 'config/client';

import { Establishment } from './types';

export async function upsertEstablishment(establishment: Establishment) {
  try {
    await quantumClientQueue.post('/establishment/upsert', establishment);
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      const invalidCoordinates =
        'coordinates must be a latitude,longitude string';

      console.log(err.response.data.message[0] === invalidCoordinates);
      if (err.response.data.message[0] === invalidCoordinates) {
        error('Coordenadas inválida');
      }
    }

    return Promise.reject(err);
  }
}

export function useUpsertEstablishment() {
  return useMutation(upsertEstablishment);
}
