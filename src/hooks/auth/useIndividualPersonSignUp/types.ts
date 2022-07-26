import { Address } from 'shared/types/apiSchema'

export type IndividualPersonSingRequest = {
  name: string,
  phone: string,
  cpf: string,
  invited_by?: string,
  email: string,
  password: string,
  birth_date: string,
  address: Address
}
