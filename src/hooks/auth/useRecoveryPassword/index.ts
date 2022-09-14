import { useMutation } from 'react-query'

import { api } from 'config/client'

import { RecoveryPasswordRequest } from './types'

export async function sendRecoveryPasswordRequest (
  credentials: RecoveryPasswordRequest
) {
  const { data } = await api.post<unknown>('/passwords/recovery-request', credentials)

  return data as unknown
}

export function useRecoveryPassword () {
  return useMutation(sendRecoveryPasswordRequest)
}
