import { useQuery, UseQueryOptions } from 'react-query';

import { getMe } from 'services/resources';
import { User } from 'shared/types/apiSchema';

const QUERY_KEY_FIND_ME = 'me';

export function useMe(options?: UseQueryOptions<User>) {
  return useQuery(QUERY_KEY_FIND_ME, getMe, options);
}
