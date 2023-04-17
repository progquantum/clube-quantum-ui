export type SubscriptionRequest = {
  plan: {
    plan_id: string;
    plan_duration: number;
  };
  cvc: string;
};

export type SubscriptionPayload = {
  plan_name: string;
  is_active: boolean;
};

export type ErrorResponse = {
  statusCode: number;
  message: string;
};
