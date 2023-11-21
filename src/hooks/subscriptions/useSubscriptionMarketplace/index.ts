import { useMutation } from 'react-query';
import { AxiosError } from 'axios';

import { error as err } from 'helpers/notify/error';
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
    if (error instanceof AxiosError) {
      const alreadyHasSubscriptionError =
        'This user already has a subscription to a pos plan';
      if (error.response.data.message === alreadyHasSubscriptionError) {
        err('Este usuário já possui uma inscrição POS');
      }
    }
    return Promise.reject(error);
  }
}

export function usePostSubscriptionMarketplace() {
  return useMutation(postSubscriptionMarketplace);
}
