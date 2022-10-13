import { useMutation } from 'react-query';

import { quantumClientBase } from 'config/client';
import { error } from 'helpers/notify/error';

import { CheckPhoneCodeRequest } from './types';

export async function checkPhoneCodeRequest(
  checkPhoneCode: CheckPhoneCodeRequest,
) {
  try {
    await quantumClientBase.put<unknown>('/phones/check-code', checkPhoneCode);
  } catch (err) {
    if (err.message === 'Invalid code') error('Código inválido!');

    return Promise.reject(err);
  }
}

export function useCheckPhoneCode() {
  return useMutation(checkPhoneCodeRequest);
}
