import { AxiosError } from 'axios';

import { useMutation } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { error } from 'helpers/notify/error';

import { PostCreditCardWaitingQueueResponseData } from './types';

export async function postCreditCardWaitingQueue() {
  try {
    const { data } =
      await quantumClientQueue.post<PostCreditCardWaitingQueueResponseData>(
        '/banco-um-credit-card/create',
      );

    return data;
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      if (err.response) {
        if (err.response.data.statusCode !== 500) {
          if (
            err.response.data.message ===
            'User has already requested a Banco um credit card'
          ) {
            error('Usuário já solicitou um cartão de crédito do banco um');
          }
        }
      }
    }
    return Promise.reject(err);
  }
}

export function usePostCreditCardWaitingQueue() {
  return useMutation(postCreditCardWaitingQueue);
}
