export type BankAccountProps = {
  onUpdateFormStep: () => void;
  onPreviousFormStep: () => void;
};

export type FormValues = {
  current_account: string;
  holder_name: string;
};
