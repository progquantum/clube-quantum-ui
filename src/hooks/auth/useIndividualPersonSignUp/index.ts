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
    const emailAlreadyInUseError = 'Email already in use';
    const CPFAlreadyInUseError = 'CPF already in use';
    const YouMustBeOver18Error = 'you must be over 18 years of age';

    if (err.response.data.message === emailAlreadyInUseError) {
      error('Este email já está em uso');
    }

    if (err.response.data.message === CPFAlreadyInUseError) {
      error('Este CPF já está em uso');
    }

    if (err.response.data.message[0] === YouMustBeOver18Error) {
      error('Você precisa ser maior de 18 anos');
    }

    return Promise.reject(err);
  }
}

export function useIndividualPersonSignUp() {
  return useMutation(individualPersonSignUpRequest);
}
