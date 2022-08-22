export const formatFirstLetterToUppercase = (text: string) => {
  return text?.toLowerCase()
    .split(' ')
    .map((word) => {
      return word[0].toUpperCase() + word.slice(1)
    }).join(' ')
}
