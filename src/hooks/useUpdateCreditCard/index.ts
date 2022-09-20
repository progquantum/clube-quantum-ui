import { useMutation } from 'react-query'

import { api } from 'config/client'
import { error } from 'helpers/notify/error'
import { PaymentError } from 'shared/errors/PaymentError'

import { UpdateCreditCardData } from './types'

export async function postCreditCard (data: UpdateCreditCardData) {
  try {
    return await api.put<unknown>('/credit-cards', data)
  } catch (err) {
    if (
      err.response.data?.statusCode === 400 &&
        err.response.data?.type === 'update_recurrence_payment_method'
    ) {
      error('Código CVV inválido')
      throw new PaymentError()
    }
  }
}

export function useUpdateCreditCard () {
  return useMutation(postCreditCard)
}
