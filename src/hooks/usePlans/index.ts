import { useQuery } from 'react-query'

import { api } from 'config/client'

import { PlansData } from './types'

const QUERY_KEY_GET_PLANS = '@ClubeQuantum:plans'

export const fetchPlans = () => (
  api.get<PlansData>('/plans').then((response) => response.data)
)

export function usePlans () {
  return useQuery(QUERY_KEY_GET_PLANS, fetchPlans)
}
