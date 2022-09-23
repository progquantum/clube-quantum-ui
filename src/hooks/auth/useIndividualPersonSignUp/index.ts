import { useMutation } from 'react-query'

import { quantumClientBase } from 'config/client'
import { Session } from 'shared/types/apiSchema'

import { IndividualPersonSingRequest } from './types'

const individualPersonSingUpResquest = (
  data: IndividualPersonSingRequest
) => (
  quantumClientBase.post<Session>('/users/individual-persons', data)
    .then(response => response.data)
)

export function useIndividualPersonSignUp () {
  return useMutation(individualPersonSingUpResquest)
}
