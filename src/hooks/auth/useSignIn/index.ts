import { useMutation } from 'react-query';

import { AxiosError } from 'axios';

import { Session } from 'shared/types/apiSchema';
import { quantumClientBase } from 'config/client';
import { error } from 'helpers/notify/error';

import { SignInCredentials } from './types';

export async function signIn(credentials: SignInCredentials) {
  try {
    const { data } = await quantumClientBase.post('/sessions', credentials);

    return data as Session;
  } catch (err: unknown) {
    if (err instanceof AxiosError) {
      if (err.response.data.message === 'Cpf/Cnpj or password is incorrect') {
        error('Usuário ou senha incorretos');
      }
    }

    return Promise.reject(err);
  }
}

export function useSignIn() {
  return useMutation(signIn);
}
