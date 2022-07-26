import { Session } from 'inspector'

import { useMutation } from 'react-query'

import { api } from 'config/client'
import { LegalPersonSingRequest } from 'shared/types/apiSchema'

const legalPersonSingUpResquest = ({
  company_name, cnpj, email, invited_by, password, phone, address
}: LegalPersonSingRequest) => (
  api.post<Session>('/users/legal-persons', {
    company_name,
    phone,
    cnpj,
    email,
    password,
    invited_by,
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

export function useLegalPersonSingUp () {
  return useMutation(legalPersonSingUpResquest)
}
