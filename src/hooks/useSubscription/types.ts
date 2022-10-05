export type SubscriptionRequest = {
  plan: {
    plan_id: string;
    plan_duration: 1;
  };
  bank_account: {
    current_account: string;
    current_account_check_number: string;
    holder_name: string;
  };
  credit_card: {
    card_name: string;
    card_number: string;
    expiration_date: string;
    cvc: 990;
  };
};

export type SubscriptionPayload = {
  plan_name: string;
  is_active: boolean;
};
