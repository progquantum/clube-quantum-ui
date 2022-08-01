import { useMutation } from 'react-query'

import { api } from 'config/client'

import { RecoveryPasswordRequestData } from './types'

const sendRecoveryPasswordRequestMutation = ({
  email
}: RecoveryPasswordRequestData): Promise<unknown> => (
  api.post<unknown>('/passwords/recovery-request', { email })
)

export function useRecoveryPassword () {
  return useMutation(sendRecoveryPasswordRequestMutation)
}
