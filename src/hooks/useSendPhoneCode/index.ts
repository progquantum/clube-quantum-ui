import { useMutation } from 'react-query'

import { api } from 'config/client'

import { PhoneCodeRequest } from './types'

export async function sendPhoneCodeRequest (phoneCode: PhoneCodeRequest) {
  return await api.post<unknown>('/phones/create-code', phoneCode)
}

export function useSendPhoneCode () {
  return useMutation(sendPhoneCodeRequest)
}
