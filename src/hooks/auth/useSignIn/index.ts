import { useMutation } from 'react-query'

import { Session } from 'shared/types/apiSchema'
import { api } from 'config/client'

import { SignInCredentials } from './types'

const signInMutation = (credentials: SignInCredentials): Promise<Session> => (
  api.post<Session, { data: Session }>('/login', credentials)
    .then(response => response.data)
)

export function useSignIn () {
  return useMutation(signInMutation)
}
