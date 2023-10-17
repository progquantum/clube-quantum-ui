export type ContractsLoggedUserProps = {
  contractName?: string;
};

export type Contract = {
  id: string;
  user_id: string;
  document_key: string;
  plan_name: string;
  date_of_acquisition: string;
  file_name: string;
  marketplace_subscription_id: string;
  cancelled_at: string;
  request_cancellation: RequestCancellation[];
};

export interface RequestCancellation {
  cancelled_status: string;
}
export type ResponseData = Contract[];
