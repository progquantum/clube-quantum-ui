import { useMutation } from 'react-query';

import { quantumClientBase } from 'config/client';
import { Session } from 'shared/types/apiSchema';
import { error } from 'helpers/notify/error';

import { IndividualPersonSingRequest } from './types';

async function individualPersonSignUpRequest(
  credentials: IndividualPersonSingRequest,
) {
  try {
    const { data } = await quantumClientBase.post(
      '/users/individual-persons',
      credentials,
    );

    return data as Session;
  } catch (err) {
    if (err.response.data.message === 'Email already in use') {
      error('Este email já está em uso');
    }

    if (err.response.data.message === 'CPF already in use') {
      error('Este CPF já está em uso');
    }
    return Promise.reject(err);
  }
}

export function useIndividualPersonSignUp() {
  return useMutation(individualPersonSignUpRequest);
}
