export type PersonalAddressProps = {
  onUpdateFormStep: () => void;
  onPreviousFormStep: () => void;
};

export type AddressFormValues = {
  zip_code: string;
  street: string;
  neighborhood: string;
  number: string;
  complement: string;
  city: string;
  state: string;
  country: string;
};
