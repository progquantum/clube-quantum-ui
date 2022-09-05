export class PaymentError extends Error {
  constructor () {
    super('Invalid CVV')
  }
}
