export function formatPrice(price = '') {
  const number = parseFloat(price.replace(',', '.'));
  return number.toLocaleString('pt-BR', { style: 'currency', currency: 'BRL' });
}
