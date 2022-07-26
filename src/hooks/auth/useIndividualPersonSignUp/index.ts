import { useMutation } from 'react-query'

import { api } from 'config/client'
import { Session } from 'shared/types/apiSchema'

import { IndividualPersonSingRequest } from './types'

const individualPersonSingUpResquest = ({
  name, cpf, email, invited_by, password, phone, address, birth_date
}: IndividualPersonSingRequest) => (
  api.post<Session>('/users/individual-persons', {
    name,
    phone,
    cpf,
    email,
    password,
    invited_by,
    birth_date,
    address: {
      street: address.street,
      number: address.number,
      neighborhood: address.neighborhood,
      zip_code: address.zip_code,
      city: address.city,
      state: address.state,
      country: address.country
    }
  }).then(response => response.data)
)

export function useIndividualPersonSignUp () {
  return useMutation(individualPersonSingUpResquest)
}
