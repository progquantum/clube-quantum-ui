import { useMutation } from 'react-query';

import { quantumClientBase } from 'config/client';
import { Session } from 'shared/types/apiSchema';

import { IndividualPersonSingRequest } from './types';

async function individualPersonSignUpRequest(
  credentials: IndividualPersonSingRequest,
) {
  const { data } = await quantumClientBase.post(
    '/users/individual-persons',
    credentials,
  );

  return data as Session;
}

export function useIndividualPersonSignUp() {
  return useMutation(individualPersonSignUpRequest);
}
