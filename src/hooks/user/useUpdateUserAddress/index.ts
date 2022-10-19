import { useMutation } from 'react-query';

import { quantumClientQueue } from 'config/client';

import { UpdateUserAddressData } from './types';

export async function putAddress(data: UpdateUserAddressData) {
  return await quantumClientQueue.put<unknown>('users/address', data);
}

export function UpdateUserAddress() {
  return useMutation(putAddress);
}
