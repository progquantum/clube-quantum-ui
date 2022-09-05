import { useMutation } from 'react-query'
import { AxiosError } from 'axios'

import { api } from 'config/client'
import { error } from 'helpers/notify/error'
import { PaymentError } from 'shared/errors/PaymentError'

import { UpdateCreditCardData, ErrorResponse } from './types'

export async function updateCreditCard (data: UpdateCreditCardData) {
  return await api.put<unknown>('/credit-cards', data)
    .then(response => response.data)
    .catch((err: AxiosError<ErrorResponse>) => {
      if (
        err.response.data.statusCode === 400 &&
        err.response.data.type === 'update_recurrence_payment_method'
      ) {
        error('Código CVV inválido')
        throw new PaymentError()
      }
    })
}

export function useUpdateCreditCard () {
  return useMutation(updateCreditCard)
}
