import { useMutation } from 'react-query';

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
  } catch (err) {
    if (err.response.status === 400) {
      error(
        'Verifique se no seu cartão tem pelo menos R$1,00 para fazermos a verificação da autenticidade do mesmo.',
        6000,
      );
    }
    if (
      err.response?.data.message[0] === 'This user already owns a bank account'
    ) {
      error('Este usuário já possui uma conta bancária cadastrada.');
    }

    return Promise.reject(err);
  }
}

export function useSubscription() {
  return useMutation(subscriptionRequest);
}
