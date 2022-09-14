import { useMutation } from 'react-query'

import { api } from 'config/client'

import { ResetPasswordRequest } from './types'

export async function resetPasswordRequest (
  credentials: ResetPasswordRequest
) {
  const { data } = await api.patch('/passwords/reset', credentials)

  return data as unknown
}

export function useResetPassword () {
  return useMutation(resetPasswordRequest)
}
