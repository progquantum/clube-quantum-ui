export function formatUF(UF: string) {
  let formattedUF = UF.replace(/\d/gi, '');
  formattedUF = formattedUF.toUpperCase();
  const UFLength = UF.length;

  if (UFLength > 2) {
    formattedUF = formattedUF.substring(0, UFLength - 1);
  }

  return formattedUF;
}
