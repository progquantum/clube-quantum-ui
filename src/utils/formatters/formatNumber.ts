function format(num: string) {
  const number = Number(num);
  if (number.toFixed(2) === number.toString()) {
    return number.toString().replace('.', ',');
  }
  return number.toFixed(2).replace('.', ',');
}

function addDot(price: string) {
  const preFormattedPrice = price.replace(',', '.');
  return preFormattedPrice;
}

export const formatNumber = {
  addDot,
  format,
};
