import { useMutation } from 'react-query'

import { api } from 'config/client'

import { ZipCodePayload } from './types'

const zipCodeMutation = (zipCode: string) => (
  api.get<ZipCodePayload>(`/zips-code/${zipCode}`)
    .then(response => response.data)
)

export function useZipCode () {
  return useMutation(zipCodeMutation)
}
