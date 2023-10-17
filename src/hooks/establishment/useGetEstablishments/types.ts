export type RequestBody = {
  itemsPerPage: number;
  page: number;
  corporate_name?: string;
  category_id?: string;
  id_cursor?: string;
};

export type Info = {
  totalEstablishment: number;
  cursor: string;
};

export type Establishment = {
  corporate_name: string;
  id: string;
  category_name: string;
  logo_url: string;
  client_cashback: number;
};

export type ResponseData = {
  info: Info;
  establishment: Establishment[];
};
