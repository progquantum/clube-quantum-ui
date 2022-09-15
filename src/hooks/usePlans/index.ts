import { useQuery } from 'react-query'

import { api } from 'config/client'

import { PlansPayload } from './types'

const QUERY_KEY_PLANS = 'plans'

export async function getPlans () {
  const { data } = await api.get('/plans')

  return data as PlansPayload
}

export function usePlans () {
  return useQuery(QUERY_KEY_PLANS, getPlans)
}
