import { useMutation } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { SubscriptionRequest, SubscriptionPayload } from './types';

export async function subscriptionRequest(subscription: SubscriptionRequest) {
  const { data } = await quantumClientQueue.post(
    '/subscriptions',
    subscription,
  );

  return data as SubscriptionPayload;
}

export function useSubscription() {
  return useMutation(subscriptionRequest);
}
