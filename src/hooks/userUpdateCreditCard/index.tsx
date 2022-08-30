import { useMutation } from 'react-query'

import { AxiosError } from 'axios'

import { api } from 'config/client'

import { error } from 'helpers/notify/error'

import { PaymentHandler } from 'shared/errors/PaymentHandler'

import { UpdateCreditCardData, ErrorResponse } from './types'

export const updateCreditCard = (
  data: UpdateCreditCardData
): Promise<unknown> => (
  api.put<unknown>('/credit-cards', data)
    .catch((err: AxiosError<ErrorResponse>) => {
      if (err.response.data.statusCode === 400 && err.response.data.type === 'update_recurrence_payment_method') {
        error('Código CVV inválido')
        throw new PaymentHandler()
      }
    })
)

export function useUpdateCreditCard () {
  return useMutation(updateCreditCard)
}
