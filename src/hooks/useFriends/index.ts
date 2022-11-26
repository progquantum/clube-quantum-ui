import { useQuery } from 'react-query';

import { useState } from 'react';

import { quantumClientQueue } from 'config/client';

import { FriendsRequest } from './types';

export const QUERY_KEY_FRIENDS = 'me-friends';

export async function getFriends(page: number) {
  const { data } = await quantumClientQueue.get(`me/friends?page=${page}`);

  return data as FriendsRequest;
}

export function useFriends() {
  const [page, setPage] = useState(1);

  const { data } = useQuery([QUERY_KEY_FRIENDS, page], () => getFriends(page), {
    keepPreviousData: true,
  });

  const onPageChange = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);
  };

  return {
    data,
    onPageChange,
  };
}
