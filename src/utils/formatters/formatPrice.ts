export function formatPrice(price = '') {
  return `R$ ${price.replace('.', ',')}0`;
}
