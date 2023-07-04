export type GetSalesFilterProps = {
  page: number;
  itemsPerPage: number;
  endDate?: string;
  startDate?: string;
};

export type Filter = {
  itemsPerPage: number;
  endDate?: string;
  startDate?: string;
};

export interface SalesProps {
  salesPerPeriod: string;
  payment_method: PaymentMethod;
  sales_by_client: SalesByClient;
  card_brand: CardBrand[];
  info: Info;
  transactions: Transaction[];
}

export interface PaymentMethod {
  credit: string;
  debit: string;
  qr_code: number;
  installment_credit: number;
}

export interface SalesByClient {
  client_quantum: string;
  non_affiliated_client: string;
}

export interface CardBrand {
  brand: string;
  transactions: {
    totalAmount: number;
    totalSales: number;
  };
}

export interface Info {
  page: number;
  totalTransactions: number;
  itemsPerPage: number;
  totalPages: number;
}

export interface Transaction {
  id: string;
  user_id: string;
  credit_card_id: any;
  pos_id: string;
  created_at: string;
  partner_product_id: any;
  total_amount: string;
  type: string;
  status: string;
  card_brand: string;
  marketplace_subscription_id: any;
  cashbackSplitId: any;
  installments: number;
  has_cashback: boolean;
  payment_method: string;
}
