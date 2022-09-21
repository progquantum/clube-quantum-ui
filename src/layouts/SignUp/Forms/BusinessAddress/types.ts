export type BusinessAddressProps = {
  onUpdateFormStep: () => void;
  onPreviousFormStep: () => void;
}

export type FormData = {
  zipCode: string,
  street: string,
  neighborhood: string,
  number: string,
  complement: string,
  city: string,
  state: string,
  country: string,
}
