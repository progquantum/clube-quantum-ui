import { AxiosError } from 'axios';

import { useMutation } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { RequestBody } from './types';

export async function putReplyRequestCancellation(requestBody: RequestBody) {
  try {
    await quantumClientQueue.put(
      '/contracts/reply-request-cancellation',
      requestBody,
    );
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      console.log(err);
    }

    return Promise.reject(err);
  }
}

export function usePutReplyRequestCancellation() {
  return useMutation(putReplyRequestCancellation);
}
