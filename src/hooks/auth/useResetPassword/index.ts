import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import Router from 'next/router';

import { quantumClientBase } from 'config/client';
import { success } from 'helpers/notify/success';
import { SIGN_IN_PAGE } from 'constants/routesPath';
import { ErrorResponse } from 'shared/errors/apiSchema';
import { error } from 'helpers/notify/error';

import { ResetPasswordRequest } from './types';

export async function resetPasswordRequest(credentials: ResetPasswordRequest) {
  const { data } = await quantumClientBase.patch(
    '/passwords/reset',
    credentials,
  );

  return data as unknown;
}

export function useResetPassword() {
  return useMutation(resetPasswordRequest, {
    onSuccess: () => {
      success('Senha alterada com sucesso');

      Router.push(SIGN_IN_PAGE);
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      if (err.response.data.message === 'Password recovery code not found') {
        error('Código de recuperação não encontrado');
      }

      if (err.response.data.message === 'invalid code') {
        error('Código de recuperação inválido');
      }
    },
  });
}
