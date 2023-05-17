export type RequestBodyPos = {
  name: string;
  document: string;
  email: string;
  birthDate: string;
  country: string;
  uf: string;
  city: string;
  neighborhood: string;
  street: string;
  number: string;
  complement: string;
  cep: string;
  phone: string;
  marketPlaceSubscriptionId: string;
};

export type ResponseData = {
  document: Document;
};

export type Document = {
  key: string;
  date_of_acquisition: string;
  plan_name: string;
  file_name: string;
  url: string;
};
