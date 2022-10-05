export function formatAddressNumber(number: string) {
  number.replace(/[^\d]/g, '');

  return number;
}
