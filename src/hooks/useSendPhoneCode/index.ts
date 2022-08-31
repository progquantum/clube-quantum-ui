import { useMutation } from 'react-query'

import { api } from 'config/client'

import { PhoneCodeRequest } from './types'

export async function sendPhoneCodeRequest (phoneCode: PhoneCodeRequest) {
  const { data } = await api.post('/phones/create-code', phoneCode)

  return data as unknown
}

export function useSendPhoneCode () {
  return useMutation(sendPhoneCodeRequest)
}
