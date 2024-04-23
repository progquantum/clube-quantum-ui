export type GetAffiliatePaymentsProps = {
  page: number;
  itemsPerPage?: number;
};

export interface AffiliatePayments {
  info: Info;
  balancesFiles: Payments[];
}

export interface Info {
  page: number;
  totalPages: number;
  itemsPerPage: number;
  totalFiles: number;
}

export interface Payments {
  id: string;
  key: string;
  url: string;
  createAt: Date;
}

export type Filter = {
  itemsPerPage?: number;
  page?: number;
};
