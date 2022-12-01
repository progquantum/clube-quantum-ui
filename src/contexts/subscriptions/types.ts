import { Dispatch, SetStateAction } from 'react';

export type Plans = {
  plan_id?: string;
  plan_duration?: number;
  price?: string;
  plan_name?: string;
  plan_period: string;
};

export type BankAccount = {
  current_account: string;
  current_account_check_number: string;
  holder_name: string;
};

export type CreditCard = {
  card_name?: string;
  card_number?: string;
  expiration_date?: string;
  cvc: string;
};

export type SubscriptionsStateContextData = {
  plan: Plans;
  bankAccount: BankAccount;
  creditCard: CreditCard;
};

export type SubscriptionsDispatchContextData = {
  registerPlan: Dispatch<SetStateAction<Plans>>;
  registerBankAccount: Dispatch<SetStateAction<BankAccount>>;
  registerCreditCard: Dispatch<SetStateAction<CreditCard>>;
};
