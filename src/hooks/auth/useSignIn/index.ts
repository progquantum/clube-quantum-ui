import { useMutation } from 'react-query';
import { AxiosError } from 'axios';

import { Session } from 'shared/types/apiSchema';
import { quantumClientBase } from 'config/client';
import { ErrorResponse } from 'shared/errors/apiSchema';

import { SignInCredentials } from './types';

export async function signIn(credentials: SignInCredentials) {
  try {
    const { data } = await quantumClientBase.post('/sessions', credentials);

    return data as Session;
  } catch (err) {
    if (err as AxiosError<ErrorResponse>) {
      if (err.response.data.message === 'Cpf/Cnpj or password is incorrect') {
        throw new Error('Usuário ou senha incorretos');
      }
    }
  }
}

export function useSignIn() {
  return useMutation(signIn);
}
