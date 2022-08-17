import { useMutation } from 'react-query'

import { api } from 'config/client'

import { RegisterBankAccountData } from './types'

export const registerBankAccount = (
  data: RegisterBankAccountData
): Promise<unknown> => (
  api.post<unknown>('/bank-accounts', data)
)

export function useRegisterBankAccount () {
  return useMutation(registerBankAccount)
}
