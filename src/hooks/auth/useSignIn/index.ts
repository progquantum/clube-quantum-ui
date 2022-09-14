import { useMutation } from 'react-query'

import { Session } from 'shared/types/apiSchema'
import { api } from 'config/client'

import { SignInCredentials } from './types'

export async function signIn (credentials: SignInCredentials) {
  const { data } = await api.post('/sessions', credentials)

  return data as Session
}

export function useSignIn () {
  return useMutation(signIn)
}
