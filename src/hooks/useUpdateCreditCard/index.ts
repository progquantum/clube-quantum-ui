import { useMutation } from 'react-query';

import { quantumClientQueue } from 'config/client';
import { error } from 'helpers/notify/error';

import { UpdateCreditCardData } from './types';

export async function postCreditCard(data: UpdateCreditCardData) {
  try {
    return await quantumClientQueue.put<unknown>('/credit-cards', data);
  } catch (err) {
    const cardNameError = 'card_name can only contain letters';
    if (
      err.response.data?.statusCode === 400 &&
      err.response.data?.type === cardNameError
    ) {
      error('Nome deve conter apenas letras');
      return Promise.reject(err);
    }

    if (
      err.response.data?.statusCode === 400 &&
      err.response.data?.type === 'update_recurrence_payment_method'
    ) {
      error('Código CVV inválido');
      return Promise.reject(err);
    }
  }
}

export function useUpdateCreditCard() {
  return useMutation(postCreditCard);
}
