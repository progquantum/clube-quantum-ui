import { useMutation } from 'react-query';

import { quantumClientBase } from 'config/client';
import { Session } from 'shared/types/apiSchema';
import { error } from 'helpers/notify/error';

import { LegalPersonSingRequest } from './types';

async function legalPersonSingUpResquest(credentials: LegalPersonSingRequest) {
  try {
    const { data } = await quantumClientBase.post(
      '/users/legal-persons',
      credentials,
    );

    return data as Session;
  } catch (err) {
    if (err.response?.data.message[0] === 'email must be an email') {
      error('Insira um email válido');
    }

    if (err.response.data.message === 'Email already in use') {
      error('Este email já está em uso');
    }

    if (err.response.data.message === 'CNPJ already in use') {
      error('Este CNPJ já está em uso');
    }

    return Promise.reject(err);
  }
}

export function useLegalPersonSingUp() {
  return useMutation(legalPersonSingUpResquest);
}
