export function formatCPF (cpf: string) {
  const formattedCpf = cpf.replace(/[^\d]/g, '')
  const formatCPFLenght = formattedCpf.length
  const cpfLenght = cpf.length

  if (formatCPFLenght <= 6) {
    cpf = formattedCpf.replace(/(\d{3})(\d{1,3})/g, '$1.$2')
  } else if (formatCPFLenght <= 9) {
    cpf = formattedCpf.replace(/(\d{3})(\d{3})(\d{1,3})/g, '$1.$2.$3')
  } else if (formatCPFLenght <= 14) {
    cpf = formattedCpf.replace(/(\d{3})(\d{3})(\d{3})(\d{1,2})/g, '$1.$2.$3-$4')
  }

  if (cpfLenght > 14) {
    cpf = cpf.substring(0, cpfLenght - 1)
  }

  return cpf
}
