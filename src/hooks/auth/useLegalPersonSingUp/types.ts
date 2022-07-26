import { Address } from 'shared/types/apiSchema'

export type LegalPersonSingRequest = {
  company_name: string,
  phone: string,
  cnpj: string,
  invited_by?: string,
  email: string,
  password: string,
  address: Address
}
