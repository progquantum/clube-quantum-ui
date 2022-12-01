export type AddressInformationProps = {
  onRequestClose: () => void;
};

export type AddressFormValues = {
  street: string;
  number: string;
  neighborhood: string;
  complement: string;
  zip_code: string;
  city: string;
  state: string;
  country: string;
};
