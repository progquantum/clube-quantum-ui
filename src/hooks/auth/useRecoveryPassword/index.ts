import { useMutation } from 'react-query';

import { quantumClientBase } from 'config/client';

import { error } from 'helpers/notify/error';

import { RecoveryPasswordRequest } from './types';

export async function sendRecoveryPasswordRequest(
  credentials: RecoveryPasswordRequest,
) {
  try {
    await quantumClientBase.post<unknown>(
      '/passwords/recovery-request',
      credentials,
    );
  } catch (err) {
    if (err.response?.data.message === 'Email not registered') {
      error('Email não registrado');
    }

    return Promise.reject(err);
  }
}

export function useRecoveryPassword() {
  return useMutation(sendRecoveryPasswordRequest);
}
