export function formatBirthDate(birthDate: string) {
  const birthDateLength = birthDate.length;
  let formattedBirthDate = birthDate.replace(/\D/g, '');
  formattedBirthDate = formattedBirthDate.replace(/(\d{2})(\d)/, '$1/$2');
  formattedBirthDate = formattedBirthDate.replace(/(\d{2})(\d)/, '$1/$2');

  if (birthDateLength > 10) {
    formattedBirthDate = formattedBirthDate.substring(0, birthDateLength - 1);
  }

  return formattedBirthDate;
}
