import { useMutation } from 'react-query'

import { AxiosError } from 'axios'

import { api } from 'config/client'

import { PlanPayLoad, PlanData, ErrorResponse } from './types'

export async function planUpdateRequest (requestBody: PlanData) {
  const { data } = await api.put('/subscriptions', requestBody)
  return data as PlanPayLoad
}

export function usePlanUpdate () {
  return useMutation(planUpdateRequest)
}
