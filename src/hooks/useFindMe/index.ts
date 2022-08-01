import { useQuery } from 'react-query'

import { api } from 'config/client'

import { FindMe } from './types'

const QUERY_KEY_FIND_ME = 'me'

const fetchFindMe = () => (
  api.get<FindMe>('/me').then((response) => response.data)
)

export function useFindMe () {
  return useQuery(QUERY_KEY_FIND_ME, fetchFindMe)
}
