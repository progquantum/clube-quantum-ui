import { useMutation } from 'react-query';

import { quantumClientBase } from 'config/client';
import { error } from 'helpers/notify/error';

import { ResetPasswordRequest } from './types';

export async function resetPasswordRequest(credentials: ResetPasswordRequest) {
  try {
    await quantumClientBase.patch<unknown>('/passwords/reset', credentials);
  } catch (err) {
    if (err.response.data.message === 'Password recovery code not found') {
      error('Código de recuperação não encontrado');
    }

    if (err.response.data.message === 'invalid code') {
      error('Código de recuperação inválido');
    }

    return Promise.reject(err);
  }
}

export function useResetPassword() {
  return useMutation(resetPasswordRequest);
}
