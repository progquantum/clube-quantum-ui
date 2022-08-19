import { useMutation } from 'react-query'

import { api } from 'config/client'

import { UpdateCreditCardData } from './types'

export const updateCreditCard = (
  data: UpdateCreditCardData
): Promise<unknown> => (
  api.put<unknown>('/credit-cards', data)
)

export function useUpdateCreditCard () {
  return useMutation(updateCreditCard)
}
