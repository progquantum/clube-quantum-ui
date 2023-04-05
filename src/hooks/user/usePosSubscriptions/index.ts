/* eslint-disable prefer-destructuring */
import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { Filter, PosSubscriptionsProps } from './types';

export const QUERY_CLIENT_KEY_POS_SUBSCRIPTION =
  'QUERY_CLIENT_KEY_POS_SUBSCRIPTION';

export async function getPosSubscriptions({ name }: Filter) {
  const { data } = await quantumClientQueue.get('/users/pos-subscriptions', {
    params: {
      ...(name ? { name } : {}),
    },
  });

  return data as PosSubscriptionsProps;
}

export function usePosSubscriptions({ name }: Filter) {
  return useQuery([QUERY_CLIENT_KEY_POS_SUBSCRIPTION, name], () =>
    getPosSubscriptions({ name }),
  );
}
