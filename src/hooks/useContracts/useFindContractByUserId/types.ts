export type Contract = {
  id: string;
  user_id: string;
  document_key: string;
  plan_name: string;
  date_of_acquisition: string;
  file_name: string;
};

export type ResponseData = Contract[];
