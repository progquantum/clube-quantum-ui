import { useState } from 'react';

import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { FriendsRequest } from './types';

export const QUERY_KEY_FRIENDS = 'me-friends';

export async function getFriends(page: number) {
  try {
    const { data } = await quantumClientQueue.get(
      `me/friends?page=${page}&count=6`,
    );

    return data as FriendsRequest;
  } catch (err) {
    return Promise.reject(err);
  }
}

export function useFriends() {
  const [page, setPage] = useState(1);

  const {
    data,
    isError,
    isLoading: loading,
  } = useQuery([QUERY_KEY_FRIENDS, page], () => getFriends(page), {
    keepPreviousData: true,
  });

  const onPageChange = (selectedItem: { selected: number }) => {
    setPage(selectedItem.selected + 1);
  };

  return {
    data,
    onPageChange,
    isError,
    loading,
  };
}
