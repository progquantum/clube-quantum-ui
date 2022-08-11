export type FindBilling = {
  credit_card: {
    last_digits: string,
    brand: string,
    expiration_date: string
  },
  bank_account: {
    bank_code: string,
    bank_name: string,
    agency: string,
    holder_name: string,
    current_account: string,
    current_account_check_number: string
  },

}
