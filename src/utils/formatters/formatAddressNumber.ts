export function formatAddressNumber (number: string) {
  number = number.replace(/[^\d]/g, '')

  return number
}
