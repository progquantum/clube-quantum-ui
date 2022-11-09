export const formatFirstLetterToUppercase = (text: string) =>
  text
    ?.toLowerCase()
    .split(' ')
    .map(word => word[0].toUpperCase() + word.slice(1))
    .join(' ');
