// (/(.{4})/g, '$1 ') add right space for every 4 digits
// /\s*$/remove all space in end of string

export function formatCreditCard (value: string) {
  const valueFormatted = value.replace(/[^\d]/g, '')

  if (valueFormatted.length <= 19) {
    value = valueFormatted.replace(/(.{4})/g, '$1 ').replace(/\s*$/, '')
  }
  return value
}
