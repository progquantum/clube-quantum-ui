import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import { quantumClientQueue } from 'config/client';
import { error } from 'helpers/notify/error';

import { DescriptionCashback } from './types';
import {
  cashbackRulesErrorMessages,
  generalErrorMessages,
} from './errorMessages';

export async function upsertDescriptionCashback(props: DescriptionCashback) {
  try {
    await quantumClientQueue.post(
      '/establishment/upsert-description-cashback',
      props,
    );
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      const errorMessage = Array.isArray(err.response.data.message)
        ? err.response.data.message[0]
        : err.response.data.message;

      if (errorMessage) {
        if (cashbackRulesErrorMessages.includes(errorMessage)) {
          error('Valor do cashback precisa ser um número válido');
        } else if (generalErrorMessages[errorMessage]) {
          const translatedErrorMessage = generalErrorMessages[errorMessage];
          error(translatedErrorMessage);
        }
      }
    }

    return Promise.reject(error);
  }
}

export function useUpsertDescriptionCashback() {
  return useMutation(upsertDescriptionCashback);
}
