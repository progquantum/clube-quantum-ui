import { useQuery, UseQueryOptions } from 'react-query'
import noop from 'lodash.noop'

import { Wallet } from 'shared/types/apiSchema'
import { api } from 'config/client'

export const QUERY_KEY_FIND_BILLING = 'me-billing'

export async function getWallet () {
  return await api.get<Wallet>('/me/billing')
    .then((response) => response.data)
    .catch(noop)
}

export function useWallet (options?: UseQueryOptions<Wallet>) {
  return useQuery(QUERY_KEY_FIND_BILLING, getWallet, options)
}
