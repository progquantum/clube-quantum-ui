export function formatCVV(CVV: string) {
  let formattedCVV = CVV.replace(/\D/g, '');

  if (CVV.length > 3) {
    formattedCVV = formattedCVV.substring(0, CVV.length - 1);
  }

  return formattedCVV;
}
