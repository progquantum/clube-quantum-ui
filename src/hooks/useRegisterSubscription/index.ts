import { useMutation } from 'react-query'

import { api } from 'config/client'

import { RegisterSubscriptionData } from './types'

export const registerSubscription = (
  data: RegisterSubscriptionData
) => (
  api.post('/subscriptions', data)
)

export function useRegisterSubscription () {
  return useMutation(registerSubscription)
}
