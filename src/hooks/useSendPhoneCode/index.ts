import { useMutation } from 'react-query'

import { api } from 'config/client'

import { SendPhoneCodeData } from './types'

const sendPhoneCode = ({ phone }: SendPhoneCodeData) => (
  api.post('/phones/create-code', {
    phone
  })
)

export function useSendPhoneCode () {
  return useMutation(sendPhoneCode)
}
