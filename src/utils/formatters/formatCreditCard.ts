export function formatCreditCardAddSpace (value: string) {
  const valueFormatted = value.replace(/[^\d]/g, '')

  if (valueFormatted.length <= 19) {
    value = valueFormatted.replace(/(.{4})/g, '$1 ').replace(/\s*$/, '')
  }
  return value
}

export function formatCreditCardRemoveSpace (value: string) {
  return value.replace(/ /g, '')
}
