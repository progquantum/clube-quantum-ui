export type AddressInformationProps = {
  isOpen: boolean
  onRequestClose: () => void
}

export type AddressFormProps = {
  street: string
  number: string
  neighborhood: string
  complement: string
  zip_code: string
  city: string
  state: string
  country: string
}
