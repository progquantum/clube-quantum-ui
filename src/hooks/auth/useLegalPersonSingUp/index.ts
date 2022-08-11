import { useMutation } from 'react-query'

import { api } from 'config/client'
import { Session } from 'shared/types/apiSchema'

import { LegalPersonSingRequest } from './types'

const legalPersonSingUpResquest = (
  data: LegalPersonSingRequest
) => (
  api.post<Session>('/users/legal-persons', data)
    .then(response => response.data)
)

export function useLegalPersonSingUp () {
  return useMutation(legalPersonSingUpResquest)
}
