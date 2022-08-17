import { useQuery, UseQueryOptions } from 'react-query'

import { api } from 'config/client'

import { FindBilling } from './types'

export const QUERY_KEY_FIND_BILLING = 'me-billing'

export const fetchFindBilling = (): Promise<FindBilling> => (
  api.get<FindBilling>('/me/billing').then((response) => response.data)
)

export function useFindBilling (options?: UseQueryOptions<FindBilling>) {
  return useQuery(QUERY_KEY_FIND_BILLING, fetchFindBilling, options)
}
