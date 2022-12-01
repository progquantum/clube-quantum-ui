export function formatCPF(cpf: string) {
  const preFormattedCpf = cpf.replace(/[^\d]/g, '');
  const formatCPFLenght = preFormattedCpf.length;
  const cpfLenght = cpf.length;
  let formattedCPF = cpf;

  if (formatCPFLenght <= 6) {
    formattedCPF = preFormattedCpf.replace(/(\d{3})(\d{1,3})/g, '$1.$2');
  } else if (formatCPFLenght <= 9) {
    formattedCPF = preFormattedCpf.replace(
      /(\d{3})(\d{3})(\d{1,3})/g,
      '$1.$2.$3',
    );
  } else if (formatCPFLenght <= 14) {
    formattedCPF = preFormattedCpf.replace(
      /(\d{3})(\d{3})(\d{3})(\d{1,2})/g,
      '$1.$2.$3-$4',
    );
  }

  if (cpfLenght > 14) {
    formattedCPF = cpf.substring(0, cpfLenght - 1);
  }

  return formattedCPF;
}
