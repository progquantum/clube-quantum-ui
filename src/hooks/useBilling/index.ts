import { useQuery } from 'react-query'

import { api } from 'config/client'

import { BillingData } from './types'

const QUERY_KEY_GET_BILLING = '@ClubeQuantum:billing'

export const fetchBilling = () => (
  api.get<BillingData>('/me/billing').then((response) => response.data)
)

export function useBilling () {
  return useQuery(QUERY_KEY_GET_BILLING, fetchBilling)
}
