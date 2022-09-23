import { useMutation } from 'react-query'

import { quantumClientBase } from 'config/client'

import { CheckPhoneCodeRequest } from './types'

export async function checkPhoneCodeRequest (checkPhoneCode: CheckPhoneCodeRequest) {
  const { data } = await quantumClientBase.put('/phones/check-code', checkPhoneCode)

  return data as unknown
}

export function useCheckPhoneCode () {
  return useMutation(checkPhoneCodeRequest)
}
