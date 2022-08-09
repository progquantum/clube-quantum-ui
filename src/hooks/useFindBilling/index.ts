import { useQuery } from 'react-query'

import { api } from 'config/client'

import { FindBilling } from './types'

const QUERY_KEY_FIND_BILLING = 'me/billing'

const fetchFindBilling = () => (
  api.get<FindBilling>('/me/billing').then((response) => response.data)
)

export function useFindBilling () {
  return useQuery(QUERY_KEY_FIND_BILLING, fetchFindBilling)
}
