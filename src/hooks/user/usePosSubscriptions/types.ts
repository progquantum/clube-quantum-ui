export type Filter = {
  name?: string;
};

export type PosSubscriptionsProps = {
  id: string;
  created_at: string;
  legal_person: {
    company_name: string;
    cnpj: string;
  };
  individual_person: {
    name: string;
    cpf: string;
  };
  login: string;
  phone: string;
}[];
