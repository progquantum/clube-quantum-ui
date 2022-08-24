import { useQuery } from 'react-query'

import { api } from 'config/client'
import { User } from 'shared/types/apiSchema'

const QUERY_KEY_FIND_ME = 'me'

export const fetchFindMe = () => (
  api.get<User>('/me').then((response) => response.data)
)

export function useFindMe () {
  return useQuery(QUERY_KEY_FIND_ME, fetchFindMe)
}
