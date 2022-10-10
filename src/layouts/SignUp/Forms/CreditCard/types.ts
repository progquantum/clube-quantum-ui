export type BankCardProps = {
  onUpdateFormStep: () => void;
  onNavigateToSuccessfulSignUp: () => void;
  onPreviousFormStep: () => void;
};

export type CreditCardFormValues = {
  card_number: string;
  card_name: string;
  expiration_date: string;
  cvc: string;
};
