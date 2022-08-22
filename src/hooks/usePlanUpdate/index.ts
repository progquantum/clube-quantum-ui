import { useMutation } from 'react-query'

import { api } from 'config/client'

import { PlanPayLoad, PlanData } from './types'

const planUpdateRequest = (
  data: PlanData
) => (
  api.put<PlanPayLoad>('/subscriptions', data)
    .then(response => response.data)
)

export function usePlanUpdate () {
  return useMutation(planUpdateRequest)
}
