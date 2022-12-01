export function formatCNPJ(CNPJ: string) {
  let formattedCNPJ = CNPJ.replace(/\D/g, '');
  formattedCNPJ = formattedCNPJ.replace(/(\d{2})(\d)/, '$1.$2');
  formattedCNPJ = formattedCNPJ.replace(/(\d{3})(\d)/, '$1.$2');
  formattedCNPJ = formattedCNPJ.replace(/(\d{3})(\d)/, '$1/$2');
  formattedCNPJ = formattedCNPJ.replace(/(\d{4})(\d{1,2})/, '$1-$2');

  const CNPJLenght = CNPJ.length;

  if (CNPJLenght > 18) {
    formattedCNPJ = formattedCNPJ.substring(0, CNPJLenght - 1);
  }

  return formattedCNPJ;
}
