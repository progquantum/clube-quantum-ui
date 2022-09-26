export function formatCNPJ(cnpj: string) {
  const preFormattedCnpj = cnpj.replace(/[^\d]/g, '');
  const formatCNPJLenght = preFormattedCnpj.length;
  const cnpjLenght = cnpj.length;
  let formattedCnpj = cnpj;

  if (formatCNPJLenght <= 5) {
    formattedCnpj = preFormattedCnpj.replace(/(\d{2})(\d{1,3})/g, '$1.$2');
  } else if (formatCNPJLenght <= 8) {
    formattedCnpj = preFormattedCnpj.replace(
      /(\d{2})(\d{3})(\d{1,3})/g,
      '$1.$2.$3',
    );
  } else if (formatCNPJLenght <= 12) {
    formattedCnpj = preFormattedCnpj.replace(
      /(\d{2})(\d{3})(\d{3})(\d{1,4})/g,
      '$1.$2.$3/$4',
    );
  } else if (formatCNPJLenght <= 14) {
    formattedCnpj = preFormattedCnpj.replace(
      /(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})/g,
      '$1.$2.$3/$4-$5',
    );
  }

  if (cnpjLenght > 18) {
    formattedCnpj = cnpj.substring(0, cnpjLenght - 1);
  }

  return formattedCnpj;
}
