export type PlanData = {
  plan: {
    plan_id: string
    plan_duration: number
  },
  cvc: string
}

export type PlanPayLoad = {
  plan_name: string;
  is_active: boolean;
}

export type ErrorResponse = {
  'statusCode':number;
  'message':string,
}
