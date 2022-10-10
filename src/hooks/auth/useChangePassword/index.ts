import { useMutation } from 'react-query';

import { AxiosError } from 'axios';

import { quantumClientQueue } from 'config/client';

import { success } from 'helpers/notify/success';
import { ErrorResponse } from 'shared/errors/apiSchema';

import { error } from 'helpers/notify/error';

import { ChangePasswordRequestData } from './types';

async function changePasswordMutation(data: ChangePasswordRequestData) {
  return await quantumClientQueue.patch<unknown>(
    '/users/update-password',
    data,
  );
}
export function useChangePassword() {
  return useMutation(changePasswordMutation, {
    onSuccess: () => {
      success('Senha alterada com sucesso');
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      if (err.response.data.message === 'Password does not match') {
        error('Senha atual não corresponde');
      }
    },
  });
}
