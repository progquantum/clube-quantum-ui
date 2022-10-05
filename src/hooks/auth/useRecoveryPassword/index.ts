import { useMutation } from 'react-query';
import { AxiosError } from 'axios';
import Router from 'next/router';

import { quantumClientBase } from 'config/client';
import { success } from 'helpers/notify/success';
import { ErrorResponse } from 'shared/errors/apiSchema';
import { SIGN_IN_PAGE } from 'constants/routesPath';
import { error } from 'helpers/notify/error';

import { RecoveryPasswordRequest } from './types';

export async function sendRecoveryPasswordRequest(
  credentials: RecoveryPasswordRequest,
) {
  const { data } = await quantumClientBase.post<unknown>(
    '/passwords/recovery-request',
    credentials,
  );

  return data as unknown;
}

export function useRecoveryPassword() {
  return useMutation(sendRecoveryPasswordRequest, {
    onSuccess: (_, variables) => {
      success(`Enviado e-mail para ${variables.email}`);

      Router.push(SIGN_IN_PAGE);
    },
    onError: (err: AxiosError<ErrorResponse>) => {
      if (err.response?.data.message === 'Email not registered') {
        error('Email não registrado');
      }
    },
  });
}
