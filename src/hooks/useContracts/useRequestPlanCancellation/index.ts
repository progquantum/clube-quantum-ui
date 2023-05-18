import { AxiosError } from 'axios';

import { useMutation } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { RequestBody } from './types';

export async function postPlanCancellation(requestBody: RequestBody) {
  if (!requestBody) return;
  try {
    await quantumClientQueue.post(
      '/contracts/request-plan-cancellation',
      requestBody,
    );
  } catch (error: unknown) {
    if (error instanceof AxiosError) {
      console.log(error);
    }
    return Promise.reject(error);
  }
}

export function usePostPlanCancellation() {
  return useMutation(postPlanCancellation);
}
