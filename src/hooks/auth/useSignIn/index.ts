import { useMutation } from 'react-query';

import { Session } from 'shared/types/apiSchema';
import { quantumClientBase } from 'config/client';

import { SignInCredentials } from './types';

export async function signIn(credentials: SignInCredentials) {
  const { data } = await quantumClientBase.post('/sessions', credentials);

  return data as Session;
}

export function useSignIn() {
  return useMutation(signIn);
}
