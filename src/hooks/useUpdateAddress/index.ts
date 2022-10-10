import { useMutation } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { UpdateAddressProps } from './types';

export async function putAddress(data: UpdateAddressProps) {
  return await quantumClientQueue.put<unknown>('users/address', data);
}

export function useUpadateAddress() {
  return useMutation(putAddress);
}
