import { useMutation } from 'react-query'

import { quantumClientBase } from 'config/client'

import { RecoveryPasswordRequest } from './types'

export async function sendRecoveryPasswordRequest (
  credentials: RecoveryPasswordRequest
) {
  const { data } = await quantumClientBase.post<unknown>('/passwords/recovery-request', credentials)

  return data as unknown
}

export function useRecoveryPassword () {
  return useMutation(sendRecoveryPasswordRequest)
}
