import { api } from 'config/client'

import { GetAddressDataByZipCodeResponse } from './types'

export async function getAddressDataByZipCodeService (
  zipCode: string
): Promise<GetAddressDataByZipCodeResponse> {
  const { data } = await api.get(`/zip-codes/${zipCode}`)

  return data
}
