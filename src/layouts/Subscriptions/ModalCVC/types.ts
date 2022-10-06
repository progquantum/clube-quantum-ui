export type ModalCVCProps = {
  onSucessful: () => void;
  onError: () => void;
  onClose: () => void;
};

export type CVCFormValues = {
  cvc: string;
};
