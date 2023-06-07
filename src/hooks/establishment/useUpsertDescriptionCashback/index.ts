import { AxiosError } from 'axios';

import { useMutation } from 'react-query';

import { quantumClientQueue } from 'config/client';
import { error } from 'helpers/notify/error';

import { DescriptionCashback } from './types';

export async function upsertDescriptionCashback(props: DescriptionCashback) {
  try {
    await quantumClientQueue.post(
      '/establishment/upsert-description-cashback',
      props,
    );
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      if (
        err.response.data.message ===
        'Days of week in hour opening is invalid, is necessary all days of week'
      ) {
        error('Selecione regras de cashback para todos os dias!');
      }

      if (
        err.response.data.message ===
        'The sum of the client cashback and adm cashback must be equal to the total cashback'
      ) {
        error(
          'A soma do cashback do cliente e do adm cashback deve ser igual ao cashback total!',
        );
      }
    }

    return Promise.reject(error);
  }
}

export function useUpsertDescriptionCashback() {
  return useMutation(upsertDescriptionCashback);
}
