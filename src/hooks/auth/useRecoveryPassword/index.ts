import { useMutation } from 'react-query'

import { api } from 'config/client'

import { RecoveryPasswordRequestData } from './types'

const sendRecoveryPasswordRequestMutation = (
  data: RecoveryPasswordRequestData
): Promise<unknown> => (
  api.post<unknown>('/passwords/recovery-request', data)
)

export function useRecoveryPassword () {
  return useMutation(sendRecoveryPasswordRequestMutation)
}
