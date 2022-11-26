export type FormCreditCardData = {
  card_name?: string;
  card_number?: string;
  expiration_date?: string;
  cvc: string;
};

export type ModalProps = {
  onRequestClose: () => void;
  onUpdateFormStep: () => void;
  onPreviousFormStep: () => void;
};
