export type Subscription = {
  plan_name: string
  is_active: boolean
}

export type Address = {
  street: string
  number: string
  neighborhood: string
  complement?: string
  zip_code: string
  city: string
  state: string
  country: string
}

export type Profile = {
  name: string
  birth_date: string
  phone: string
  email: string
  url: string
  address: Address
}

export type User = {
  name: string
  subscription?: Subscription
  address: {
    city: string
    state: string
  }
  invite_code?: string
}

export type Session = {
  user: User
  token: string
  refresh_token: string
}

export type CreditCard = {
  last_digits: string,
  brand: string,
  expiration_date: string
}

export type BankAccount = {
  bank_code: string,
  bank_name: string,
  agency: string,
  holder_name: string,
  current_account: string,
  current_account_check_number: string
}

export type Wallet = {
  credit_card?: CreditCard
  bank_account?: BankAccount
}

export type InviteCodePayload = {
  is_valid: boolean
}
