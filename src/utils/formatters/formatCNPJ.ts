export function formatCNPJ (cnpj: string) {
  const formattedCnpj = cnpj.replace(/[^\d]/g, '')
  const formatCNPJLenght = formattedCnpj.length
  const cnpjLenght = cnpj.length

  if (formatCNPJLenght <= 5) {
    cnpj = formattedCnpj.replace(/(\d{2})(\d{1,3})/g, '$1.$2')
  } else if (formatCNPJLenght <= 8) {
    cnpj = formattedCnpj.replace(/(\d{2})(\d{3})(\d{1,3})/g, '$1.$2.$3')
  } else if (formatCNPJLenght <= 12) {
    cnpj = formattedCnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{1,4})/g, '$1.$2.$3/$4')
  } else if (formatCNPJLenght <= 14) {
    cnpj = formattedCnpj.replace(/(\d{2})(\d{3})(\d{3})(\d{4})(\d{1,2})/g,
      '$1.$2.$3/$4-$5'
    )
  }

  if (cnpjLenght > 18) {
    cnpj = cnpj.substring(0, cnpjLenght - 1)
  }
  return cnpj
}
