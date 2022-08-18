export interface CreditCard {
  last_digits: string;
  brand: string;
  expiration_date: string;
}

export interface BankAccount {
  bank_code: string;
  bank_name: string;
  agency: string;
  current_account: string;
  current_account_check_number: string;
  holder_name: string;
}

export type BillingData = {
  credit_card: CreditCard;
  bank_account: BankAccount;
}
