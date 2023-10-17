import { useMutation } from 'react-query';

import { AxiosError } from 'axios';

import { quantumClientQueue } from 'config/client';
import { error } from 'helpers/notify/error';

import { SubscriptionRequest, SubscriptionPayload } from './types';

export async function subscriptionRequest(subscription: SubscriptionRequest) {
  try {
    const { data } = await quantumClientQueue.post(
      '/subscriptions',
      subscription,
    );

    return data as SubscriptionPayload;
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      if (err.message === 'This user already has a subscription plan') {
        error('Este usuário já tem um plano assinado');
      }
      if (err.message === 'This user already owns a bank account') {
        error('Este usuário já possui uma conta bancária cadastrada.');
      }
    }

    return Promise.reject(err);
  }
}

export function useSubscription() {
  return useMutation(subscriptionRequest);
}
