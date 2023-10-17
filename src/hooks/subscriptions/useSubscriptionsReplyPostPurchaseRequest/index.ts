import { AxiosError } from 'axios';
import { useMutation } from 'react-query';

import { quantumClientQueue } from 'config/client';
import { error } from 'helpers/notify/error';

import { PutReplyPosPurchaseRequestRequestBody } from './types';

export async function putReplyPosPurchaseRequest(
  requestBody: PutReplyPosPurchaseRequestRequestBody,
) {
  try {
    await quantumClientQueue.put(
      '/subscriptions/reply-pos-purchase-request',
      requestBody,
    );
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      if (err) {
        error(err.response.data.message);
      }
      return Promise.reject(err);
    }
  }
}

export function usePutReplyPosPurchaseRequest() {
  return useMutation(putReplyPosPurchaseRequest);
}
