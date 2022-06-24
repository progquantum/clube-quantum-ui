type Address = {
  city: string;
  state: string;
}

type User = {
  name: string;
  subscription: string | null;
  address: Address;
  invite_code: string;
}

export type CreatePersonalAccountResponse = {
  user: User;
  token: string;
  refresh_token: string;
}
