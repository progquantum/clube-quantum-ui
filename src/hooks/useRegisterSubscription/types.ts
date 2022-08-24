export type RegisterSubscriptionData = {
  plan: {
    plan_id: string,
    plan_duration: number
  },
  bank_account: {
      current_account: string,
      current_account_check_number: string,
      holder_name: string
  },
  credit_card: {
      card_name: string,
      card_number: string,
      expiration_date: string,
      cvc: string
  }
}
