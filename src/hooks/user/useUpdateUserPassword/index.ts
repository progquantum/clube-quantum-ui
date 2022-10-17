import { useMutation } from 'react-query';

import { quantumClientQueue } from 'config/client';
import { error } from 'helpers/notify/error';

import { ChangePasswordRequestData } from './types';

async function updatePasswordMutation(data: ChangePasswordRequestData) {
  try {
    return await quantumClientQueue.patch<unknown>(
      '/users/update-password',
      data,
    );
  } catch (err) {
    if (err.response.data.message === 'Password does not match') {
      error('Senha atual não corresponde');
    }

    return Promise.reject(err);
  }
}

export function useUpdateUserPassword() {
  return useMutation(updatePasswordMutation);
}
