import { useMutation } from 'react-query'

import { api } from 'config/client'

import { RegisterSubscriptionData } from './types'

export const registerSubscription = ({ plan, bank_account, credit_card }: RegisterSubscriptionData) => (
  api.post('/subscriptions', {
    plan,
    bank_account,
    credit_card
  })
)

export function useRegisterSubscription () {
  return useMutation(registerSubscription)
}
