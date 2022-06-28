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
