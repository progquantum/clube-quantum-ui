export type ModalBankAccountProps = {
  onRequestClose: () => void;
  onRefetch?: () => void;
  onRequestNewModal: () => void;
  isOpen: boolean;
};

export type ModalBankAccountFormProps = {
  current_account: string;
  current_account_check_number?: string;
  holder_name: string;
};

export type BankAccount = {
  account_digit: string;
  account_number: string;
  current_account_check_number: string;
  current_account: string;
  holder_name: string;
};
