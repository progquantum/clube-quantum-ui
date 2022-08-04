import { useMutation } from 'react-query'

import { api } from 'config/client'

import { SendPhoneCodeData } from './types'

const sendPhoneCodeRequest = (data: SendPhoneCodeData) => (
  api.post('/phones/create-code', data)
)

export function useSendPhoneCode () {
  return useMutation(sendPhoneCodeRequest)
}
