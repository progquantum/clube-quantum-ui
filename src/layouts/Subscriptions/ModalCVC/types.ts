export type ModalCVCProps = {
  onError: () => void;
  onClose: () => void;
  modalIsOpen: boolean;
};

export type CVCFormValues = {
  cvc: string;
};
