export type ModalCVCProps = {
  onSucessful: () => void;
  onError: () => void;
  onClose: () => void;
  modalIsOpen: boolean;
};

export type CVCFormValues = {
  cvc: string;
};
