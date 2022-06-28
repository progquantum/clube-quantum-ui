export function formatCEP (cep: string) {
  cep = cep.replace(/\D/g, '')
  cep = cep.replace(/^(\d{2})(\d)/, '$1.$2')
  cep = cep.replace(/\.(\d{3})(\d)/, '.$1-$2')

  const cepLength = cep.length

  if (cepLength > 10) {
    cep = cep.substring(0, cepLength - 1)
  }

  return cep
}
