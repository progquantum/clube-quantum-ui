import { useMutation } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { SubscriptionPayload, SubscriptionRequest } from './types';

export async function planUpdateRequest(subscription: SubscriptionRequest) {
  const { data } = await quantumClientQueue.put('/subscriptions', subscription);

  return data as SubscriptionPayload;
}

export function usePlanUpdate() {
  return useMutation(planUpdateRequest);
}
