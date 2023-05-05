import { useQuery } from 'react-query';

import { quantumClientBase } from 'config/client';

import { PlansPayload } from './types';

const QUERY_KEY_PLANS = 'plans';

export async function getPlans() {
  try {
    const { data } = await quantumClientBase.get('/plans');

    return data as PlansPayload;
  } catch (error: unknown) {
    if (error instanceof Error) {
      return Promise.reject(error);
    }
  }
}

export function usePlans() {
  return useQuery([QUERY_KEY_PLANS], getPlans);
}
