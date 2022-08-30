export type UpdateCreditCardData = {
  card_number: string
  card_name: string
  expiration_date: string
  cvc: string
  card_brand: string
}

export type ErrorResponse = {
  type: string,
  statusCode: number
}
