
import { useMutation } from 'react-query'

import { api } from 'config/client'

import { UpdatePersonalInformationProps } from './types'

export async function putPersonalInformation (data: UpdatePersonalInformationProps) {
  return await api.put<unknown>('users/individual-persons', data)
}

export function useUpdatePersonalInformation () {
  return useMutation(putPersonalInformation)
}
