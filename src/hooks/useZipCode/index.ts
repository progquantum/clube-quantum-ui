import { useMutation } from 'react-query'

import { api } from 'config/client'

import { ZipCodePayload } from './types'

export async function zipCodeRequest (zipCode: string) {
  const { data } = await api.get(`/zips-code/${zipCode}`)

  return data as ZipCodePayload
}

export function useZipCode () {
  return useMutation(zipCodeRequest)
}
