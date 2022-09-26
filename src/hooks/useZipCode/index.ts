import { useMutation } from 'react-query';

import { quantumClientBase } from 'config/client';

import { ZipCodePayload } from './types';

export async function zipCodeRequest(zipCode: string) {
  const { data } = await quantumClientBase.get(`/zips-code/${zipCode}`);

  return data as ZipCodePayload;
}

export function useZipCode() {
  return useMutation(zipCodeRequest);
}
