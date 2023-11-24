import { AxiosError } from 'axios';

import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';

const QUERY_KEY_GET_INVITE_LINK = 'get-invite-link';

export async function getInviteLink() {
  try {
    const { data } = await quantumClientQueue.get<string>('/me/invite-link');
    return data;
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      return Promise.reject(err);
    }
  }
}

export function useGetInviteLink() {
  return useQuery([QUERY_KEY_GET_INVITE_LINK], getInviteLink, {
    retry: false,
  });
}
