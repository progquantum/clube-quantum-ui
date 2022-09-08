export type ModalCreditCardProps = {
  isOpen: boolean,
  onRequestNewCreditCardModal: () => void,
  onRefetch?: () => void
}

export type ModalCreditCardFormProps = {
  card_number: string
  card_name: string
  expiration_date: string
  cvc: string
  card_brand: string
}
