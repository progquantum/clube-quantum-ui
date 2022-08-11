import { useMutation } from 'react-query'

import { api } from 'config/client'

import { RequestCheckPhoneCode } from './types'

const requestCheckPhoneCode = (
  data: RequestCheckPhoneCode
) => (
  api.put('/phones/check-code/', data)
)

export function useCheckPhoneCode () {
  return useMutation(requestCheckPhoneCode)
}
