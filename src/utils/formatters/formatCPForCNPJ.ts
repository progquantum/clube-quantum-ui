export function formatCPForCNPJ(value: string) {
  const valueLenght = value.length;

  if (valueLenght <= 14) {
    let formattedCPF = value.replace(/\D/g, '');
    formattedCPF = formattedCPF.replace(/(\d{3})(\d)/, '$1.$2');
    formattedCPF = formattedCPF.replace(/(\d{3})(\d)/, '$1.$2');
    formattedCPF = formattedCPF.replace(/(\d{3})(\d{1,2})$/, '$1-$2');

    return formattedCPF;
  }

  let formattedCNPJ = value.replace(/\D/g, '');
  formattedCNPJ = formattedCNPJ.replace(/(\d{2})(\d)/, '$1.$2');
  formattedCNPJ = formattedCNPJ.replace(/(\d{3})(\d)/, '$1.$2');
  formattedCNPJ = formattedCNPJ.replace(/(\d{3})(\d)/, '$1/$2');
  formattedCNPJ = formattedCNPJ.replace(/(\d{4})(\d{1,2})/, '$1-$2');

  if (valueLenght > 18) {
    formattedCNPJ = formattedCNPJ.substring(0, valueLenght - 1);
  }

  return formattedCNPJ;
}
