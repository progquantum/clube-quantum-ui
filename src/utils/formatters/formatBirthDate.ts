export function formatBirthDate (date: string) {
  const formattedDate = date.replace(/[^\d]/g, '')
  const formattedDateLenght = formattedDate.length
  const dateLength = date.length

  if (!formattedDateLenght) {
    date = formattedDate.replace(/(\d{1,2})/g, '$1/')
  } else if (formattedDateLenght <= 4) {
    date = formattedDate.replace(/(\d{2})(\d{1,2})/g, '$1/$2')
  } else if (formattedDateLenght <= 8) {
    date = formattedDate.replace(/(\d{2})(\d{2})(\d{1,4})/g, '$1/$2/$3')
  }

  if (dateLength > 10) {
    date = date.substring(0, dateLength - 1)
  }

  return date
}
