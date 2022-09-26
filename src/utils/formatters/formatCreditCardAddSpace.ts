export function formatCreditCardAddSpace(value: string) {
  const preFormattedValue = value.replace(/[^\d]/g, '');
  let formattedValue = value;

  if (preFormattedValue.length <= 19) {
    formattedValue = preFormattedValue
      .replace(/(.{4})/g, '$1 ')
      .replace(/\s*$/, '');
  }

  return formattedValue;
}
