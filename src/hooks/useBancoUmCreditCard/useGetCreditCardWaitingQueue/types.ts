export type GetCreditCardWaitingQueueResponseData = {
  info: Info;
  bancoUmCreditCard: BancoUmCreditCard[];
};

export type Info = {
  page: number;
  itemsPerPage: number;
  totalPages: number;
  totalItems: number;
};

export type BancoUmCreditCard = {
  id: string;
  created_at: string;
  status: string;
  updated_at: string;
  user_id: string;
  doc: string;
  name: string;
};

export type GetCreditCardWaitingQueueParamValues = {
  page: string;
  itemsPerPage: string;
  searchName?: string;
  status?: string;
  startDate?: string;
  endDate?: string;
};
