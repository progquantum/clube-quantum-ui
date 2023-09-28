export type GetSubscriptionsQuantumSmartQueryParams = {
  page: string;
  itemsPerPage: string;
  searchName?: string;
};

export type SubscriptionsQuantumSmartResponse = {
  info: Info;
  marketplaceSubscriptions: MarketplaceSubscription[];
};

export type Info = {
  page: number;
  totalMarketplaceSubscriptions: number;
  itemsPerPage: number;
  totalPages: number;
};

export type MarketplaceSubscription = {
  id: string;
  user_id: string;
  partner_product_id: string;
  price_paid: string;
  order_id: string;
  expires_at: string;
  subscribed_at: string;
  renovation_failures_count: number;
  monthly_fee: number;
  is_cancelled: boolean;
  status: string;
  partner_product: PartnerProduct;
  user: User;
};

export type PartnerProduct = {
  name: string;
};

export type User = {
  phone: string;
  email: string;
  individual_person: IndividualPerson;
  legal_person: LegalPerson;
};

export type IndividualPerson = {
  name: string;
  birth_date: string;
};

export type LegalPerson = {
  company_name: string;
};
