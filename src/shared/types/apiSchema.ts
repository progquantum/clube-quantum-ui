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

export type Address = {
  street: string,
  number: string,
  neighborhood: string,
  zip_code: string,
  city: string,
  state: string,
  country: string
}

export type FindBilling = {
  credit_card?: {
    last_digits: string,
    brand: string,
    expiration_date: string
  },
  bank_account?: {
    bank_code: string,
    bank_name: string,
    agency: string,
    holder_name: string,
    current_account: string,
    current_account_check_number: string
  }
}
