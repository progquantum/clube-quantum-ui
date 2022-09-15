import { useQuery, UseQueryOptions } from 'react-query'

import { api } from 'config/client'

import { UserRegistrationData } from './types'

export const QUERY_KEY_ME_PROFILE = 'me/profile'

export async function getUserInformation () {
  return await api.get<UserRegistrationData>('/me/profile')
    .then((response) => response.data)
}

export function useInformationUser (options?: UseQueryOptions<UserRegistrationData>) {
  return useQuery(QUERY_KEY_ME_PROFILE, getUserInformation, options)
}
