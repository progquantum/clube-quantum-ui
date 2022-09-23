import { useMutation } from 'react-query'

import { quantumClientQueue } from 'config/client'

import { RegisterBankAccountData } from './types'

export async function postBankAccount (
  data: RegisterBankAccountData
) {
  return await quantumClientQueue.post<unknown>('/bank-accounts', data)
}

export function useRegisterBankAccount () {
  return useMutation(postBankAccount)
}
