import { useMutation } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { PutCreditCardWaitingQueueRequestBody } from './types';

export async function putCreditCardWaitingQueue(
  requestBody: PutCreditCardWaitingQueueRequestBody,
) {
  try {
    await quantumClientQueue.put(
      '/banco-um-credit-card/update-status',
      requestBody,
    );
  } catch (err: unknown) {
    return Promise.reject(err);
  }
}

export function usePutCreditCardWaitingQueue() {
  return useMutation(putCreditCardWaitingQueue);
}
