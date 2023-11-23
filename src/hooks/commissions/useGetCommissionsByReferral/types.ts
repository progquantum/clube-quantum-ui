export type Filter = {
  startDate: string;
  endDate: string;
};

export type Params = {
  page: string;
  itemsPerPage: string;
  endDate: string;
  startDate: string;
};
export type ResponseData = {
  totalAmount: number;
  info: {
    itemsPerPage: number;
    page: number;
    totalPages: number;
    totalTransactions: number;
  };
  Extrato: Extract[];
};

export type Extract = {
  Titulo: string;
  Valor: number;
  Acao: string;
  Tipo: string;
  GeradoEm: string;
};
