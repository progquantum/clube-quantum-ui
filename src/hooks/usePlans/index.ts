import { useQuery } from 'react-query';

import { quantumClientBase } from 'config/client';

import { PlansPayload } from './types';

const QUERY_KEY_GET_PLANS = 'plans';

export async function getPlans() {
  const { data } = await quantumClientBase.get('/plans');

  return data as PlansPayload;
}

export function usePlans() {
  return useQuery(QUERY_KEY_GET_PLANS, getPlans);
}
