import { useMutation } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { ResponseData, SubscriptionRequest } from './types';

export async function postSubscriptionMarketplace(
  requestPayload: SubscriptionRequest,
) {
  try {
    const { data } = await quantumClientQueue.post<ResponseData>(
      '/subscriptions/marketplace',
      requestPayload,
    );

    return data;
  } catch (error: unknown) {
    if (error instanceof Error) {
      console.log(error);
    }
    return Promise.reject(error);
  }
}

export function usePostSubscriptionMarketplace() {
  return useMutation(postSubscriptionMarketplace);
}
