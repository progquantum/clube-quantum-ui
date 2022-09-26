export type UserRegistrationData = {
  name: string
  birth_date: string
  phone: string
  email: string
  url: string,
  address: {
    street: string
    number: string
    neighborhood: string
    complement: string
    zip_code: string
    city: string
    state: string
    country: string
  }
}
