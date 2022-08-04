import { useMutation } from 'react-query'

import { api } from 'config/client'
import { Session } from 'shared/types/apiSchema'

import { IndividualPersonSingRequest } from './types'

const individualPersonSingUpResquest = (
  data: IndividualPersonSingRequest
) => (
  api.post<Session>('/users/individual-persons', data)
    .then(response => response.data)
)

export function useIndividualPersonSignUp () {
  return useMutation(individualPersonSingUpResquest)
}
