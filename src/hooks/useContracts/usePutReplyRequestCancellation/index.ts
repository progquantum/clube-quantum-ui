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
    return Promise.reject(err);
  }
}

export function usePutReplyRequestCancellation() {
  return useMutation(putReplyRequestCancellation);
}
