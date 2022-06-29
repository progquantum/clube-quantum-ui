import { useMutation } from 'react-query'

import { api } from 'config/client'

import { ResetPasswordRequestData } from './types'

const resetPasswordMutation = (
  data: ResetPasswordRequestData
): Promise<unknown> => (
  api.put<unknown>('/password-recoveries', data)
)

export function useResetPassword () {
  return useMutation(resetPasswordMutation)
}
