export function formatPhoneNumber (phoneNumber: string) {
  const phone = phoneNumber.replace(/[^\d]/g, '')
  const phoneLength = phone.length

  if (phoneLength <= 3) {
    phoneNumber = phone.replace(/(\d{2})(\d{1})/g, '($1) $2')
  } else if (phoneLength <= 7) {
    phoneNumber = phone.replace(/(\d{2})(\d{1})(\d{1,4})/g, '($1) $2$3')
  } else {
    phoneNumber = phone.replace(/(\d{2})(\d{1})(\d{4})(\d{1,4})/g, '($1) $2$3-$4')
  }

  return phoneNumber
}
