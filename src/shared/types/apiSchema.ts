export type Subscription = {
  plan_name: string;
  is_active: boolean;
  expires_in: Date;
  monthly_fee: number;
  price_paid: number;
};

export type Address = {
  street: string;
  number: string;
  neighborhood: string;
  complement?: string;
  zip_code: string;
  city: string;
  state: string;
  country: string;
};

export type Profile = {
  name: string;
  birth_date: string;
  phone: string;
  email: string;
  avatar_url: string;
};

export type User = {
  name: string;
  subscription?: Subscription;
  invite_code?: string;
  avatar_url: string;
  address: {
    city: string;
    state: string;
  };
  invites_accepted: string;
};

export type Session = {
  user: User;
  token: string;
  refresh_token: string;
};

export type CreditCard = {
  last_digits: string;
  brand: string;
  expiration_date: string;
};

export type BankAccount = {
  bank_code: string;
  bank_name: string;
  agency: string;
  holder_name: string;
  current_account: string;
  current_account_check_number: string;
};

export type Wallet = {
  credit_card?: CreditCard;
  bank_account?: BankAccount;
};

export type InviteCodePayload = {
  is_valid: boolean;
};

export type ZipCode = {
  cep: string;
  city: string;
  neighborhood: string;
  state: string;
  street: string;
  country: string;
};

export type TokenPayload = {
  sub: string;
  user_type: string;
  user_role: string;
  iat: number;
  exp: number;
};
