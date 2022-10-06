import { useMutation } from 'react-query';

import { quantumClientBase } from 'config/client';
import { Session } from 'shared/types/apiSchema';

import { LegalPersonSingRequest } from './types';

async function legalPersonSingUpResquest(credentials: LegalPersonSingRequest) {
  const { data } = await quantumClientBase.post(
    '/users/legal-persons',
    credentials,
  );

  return data as Session;
}

export function useLegalPersonSingUp() {
  return useMutation(legalPersonSingUpResquest);
}
