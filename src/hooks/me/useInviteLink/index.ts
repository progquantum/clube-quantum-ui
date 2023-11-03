import { AxiosError } from 'axios';

import { useQuery } from 'react-query';

import { quantumClientQueue } from 'config/client';
import { error } from 'helpers/notify/error';

const QUERY_KEY_GET_INVITE_LINK = 'get-invite-link';

export async function getInviteLink() {
  try {
    const { data } = await quantumClientQueue.get<string>('/me/invite-link');
    return data;
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      if (err.response) {
        error(err.response.data.message);
      }
      return Promise.reject(err);
    }
  }
}

export function useGetInviteLink() {
  return useQuery([QUERY_KEY_GET_INVITE_LINK], getInviteLink, {
    retryDelay: attemptIndex => Math.min(1000 * 2 ** attemptIndex, 30000),
  });
}
