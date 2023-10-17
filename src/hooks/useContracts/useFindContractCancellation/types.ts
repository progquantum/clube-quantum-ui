export type ContractCancellationProps = {
  page: number;
  itemsPerPage: number;
  searchName?: string;
};
export type Filter = {
  itemsPerPage: number;
  searchName?: string;
};

export type ContractsCancellation = {
  info: Info;
  requestCancellations: requestCancellations[];
};

export interface Info {
  page: number;
  totalTransactions: number;
  itemsPerPage: number;
  totalPages: number;
}

export interface requestCancellations {
  admin_report: string;
  cancelled_status: string;
  contract: {
    date_of_acquisition: string;
    document_key: string;
    marketplace_subscription: MarketplaceSubscription;
    plan_name: string;
    user: User;
  };
  justification: string;
  id: string;
}

export interface MarketplaceSubscription {
  price_paid: string;
}

export interface User {
  phone: string;
  email: string;
  individual_person: IndividualPerson;
  legal_person: LegalPerson;
}

export interface IndividualPerson {
  name: string;
  birth_date: string;
}

export interface LegalPerson {
  company_name: string;
}
