
import { useMutation } from 'react-query'

import { api } from 'config/client'

import { UpdateAddressProps } from './types'

export async function putAddress (data: UpdateAddressProps) {
  return await api.put<unknown>('users/address', data)
}

export function useUpadateAddress () {
  return useMutation(putAddress)
}
