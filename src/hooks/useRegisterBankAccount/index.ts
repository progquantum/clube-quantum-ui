import { useMutation } from 'react-query'

import { api } from 'config/client'

import { RegisterBankAccountData } from './types'

export async function postBankAccount (
  data: RegisterBankAccountData
) {
  return await api.post<unknown>('/bank-accounts', data)
}

export function useRegisterBankAccount () {
  return useMutation(postBankAccount)
}
