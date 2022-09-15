import { useMutation } from 'react-query'

import { api } from 'config/client'

import { ChangePasswordRequestData } from './types'

const changePasswordMutation = (
  data: ChangePasswordRequestData
) => (
  api.patch<unknown>('/users/update-password', data)
)

export function useChangePassword () {
  return useMutation(changePasswordMutation)
}
