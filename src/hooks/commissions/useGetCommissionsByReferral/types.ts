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
  Status: string;
  PaginaAtual: string;
  TotalPaginas: number;
  ItemsPorPagina: string;
  Extrato: Extract[];
};

export type Extract = {
  Titulo: string;
  Valor: number;
  Acao: string;
  Tipo: string;
  GeradoEm: string;
};
