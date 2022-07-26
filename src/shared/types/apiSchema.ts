export type User = {
  name: string
  subscription: string
  address: {
    city: string
    state: string
  }
}

export type Session = {
  user: User
  token: string
  refresh_token: string
}

type Address = {
  street: string,
  number: string,
  neighborhood: string,
  zip_code: string,
  city: string,
  state: string,
  country: string
}

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

export type LegalPersonSingRequest = {
  company_name: string,
  phone: string,
  cnpj: string,
  invited_by?: string,
  email: string,
  password: string,
  address: Address
}
