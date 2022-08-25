export function formatCreditCard (value: string) {
  const valueFormatted = value.replace(/[^\d]/g, '')

  if (valueFormatted.length <= 19) {
    value = valueFormatted.replace(/(.{4})/g, '$1 ').replace(/\s*$/, '')
  }
  return value
}
