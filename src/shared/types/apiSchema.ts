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
