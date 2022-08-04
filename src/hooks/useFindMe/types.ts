export type FindMe = {
  name: string,
  subscription: {
      plan_name: string,
      is_active: boolean
  },
  address: {
      city: string,
      state: string
  },
  invite_code: string
}
