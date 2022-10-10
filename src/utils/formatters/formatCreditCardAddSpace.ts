export function formatCreditCardAddSpace(value: string) {
  let valueFormatted = value.replace(/[^\d]/g, '');

  if (valueFormatted.length <= 19) {
    valueFormatted = valueFormatted
      .replace(/(.{4})/g, '$1 ')
      .replace(/\s*$/, '');
  }

  if (valueFormatted.length > 19) {
    valueFormatted = valueFormatted.substring(0, valueFormatted.length - 1);
  }

  return valueFormatted;
}
