export type SubscriptionRequest = {
  partner_product: PartnerProduct;
  cvc: string;
};

export type PartnerProduct = {
  partner_product_id: string;
};

export type ResponseData = {
  plan_name: string;
  price_paid: number;
  expires_in: Date;
  monthly_fee: number;
  is_active: boolean;
};
