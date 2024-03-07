export interface CommissionsExtract {
  info: Info;
  totalAmount: string;
  commissions: Commissions[];
}

export interface Info {
  page: number;
  totalTransactions: number;
  itemsPerPage: number;
  totalPages: number;
}

export interface Commissions {
  cashback_name: string;
  amount: number;
  created_at: string;
}

export type GetCommissionsProps = {
  page: number;
  itemsPerPage?: number;
  endDate?: string;
  startDate?: string;
};

export type Filter = {
  itemsPerPage?: number;
  endDate?: string;
  startDate?: string;
  page?: number;
};
