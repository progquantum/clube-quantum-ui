export type Plan = {
  id: string;
  name: string;
  description: string;
  details: string;
  price: string;
  created_at: Date;
  updated_at: Date;
  partner_id: string;
};

export type ResponsePayload = {
  productList: Plan[];
};
