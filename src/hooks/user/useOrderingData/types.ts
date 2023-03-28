export type UserOrderingData = {
  name: string;
  birth_date: string;
  phone: string;
  email: string;
  document: string;
  address: {
    street: string;
    number: string;
    neighborhood: string;
    complement: string;
    zip_code: string;
    city: string;
    state: string;
    country: string;
  };
};
