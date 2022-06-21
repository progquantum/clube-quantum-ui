export function formatPhoneNumber (phoneNumber: string) {
  const formattedPhoneNumber = phoneNumber.replace(/[^\d]/g, '')
  const formatPhoneNumberLength = formattedPhoneNumber.length
  const phoneNumberLength = phoneNumber.length

  if (formatPhoneNumberLength <= 3) {
    phoneNumber = formattedPhoneNumber.replace(/(\d{2})(\d{1})/g, '($1) $2')
  } else if (formatPhoneNumberLength <= 7) {
    phoneNumber = formattedPhoneNumber.replace(/(\d{2})(\d{1})(\d{1,4})/g, '($1) $2$3')
  } else {
    phoneNumber = formattedPhoneNumber.replace(/(\d{2})(\d{1})(\d{4})(\d{1,4})/g, '($1) $2$3-$4')
  }

  if (phoneNumberLength > 15) {
    phoneNumber = phoneNumber.substring(0, phoneNumberLength - 1)
  }

  return phoneNumber
}
