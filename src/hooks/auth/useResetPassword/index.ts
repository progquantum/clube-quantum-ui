import { useMutation } from 'react-query'

import { api } from 'config/client'

import { ResetPasswordRequestData } from './types'

const resetPasswordMutation = ({
  code, password
}: ResetPasswordRequestData): Promise<unknown> => (
  api.patch<unknown>('/passwords/reset', { code, password })
)

export function useResetPassword () {
  return useMutation(resetPasswordMutation)
}
