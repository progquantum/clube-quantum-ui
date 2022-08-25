export function formatCreditCardExpiration (value: string) {
  const valueFormatted = value.replace(/[^\d]/g, '')
  if (valueFormatted.length === 3) {
    value = valueFormatted.replace(/(.{2})/g, '$1/')
  }
  return value
}
