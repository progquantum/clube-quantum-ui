import { useQuery, UseQueryOptions } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { UserAccountData } from './types';

export const QUERY_KEY_PROFILE = 'profile';

export async function getUserProfile() {
  const { data } = await quantumClientQueue.get<UserAccountData>('me/profile');

  return data as UserAccountData;
}

export function useUserProfile(options?: UseQueryOptions<UserAccountData>) {
  return useQuery(QUERY_KEY_PROFILE, getUserProfile, options);
}
