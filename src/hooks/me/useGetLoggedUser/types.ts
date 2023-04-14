export type LoggedUser = {
  name: string;
  birth_date: string;
  phone: string;
  email: string;
  document: string;
  address: Address;
};

export type Address = {
  street: string;
  number: string;
  complement: string;
  neighborhood: string;
  zip_code: string;
  city: string;
  state: string;
  country: string;
};
