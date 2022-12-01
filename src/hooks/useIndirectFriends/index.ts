import { useQuery, UseQueryOptions } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { IndirectFriendsRequest } from './types';

export const QUERY_KEY__INDIRECT_FRIENDS = 'me-friends-indirect-statistics';

export async function getIndirectFriends() {
  const { data } = await quantumClientQueue.get(
    '/me/friends/indirect-statistics',
  );

  return data as IndirectFriendsRequest;
}

export function useIndirectFriends(
  options?: UseQueryOptions<IndirectFriendsRequest>,
) {
  return useQuery(QUERY_KEY__INDIRECT_FRIENDS, getIndirectFriends, options);
}
