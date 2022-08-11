import { useMutation } from 'react-query'

import { api } from 'config/client'

import { RegisterBankAccountData } from './types'
export const registerBankAccount = (data: RegisterBankAccountData) => (
  api.post('/bank-accounts', data)
)

export function useRegisterBankAccount () {
  return useMutation(registerBankAccount)
}
