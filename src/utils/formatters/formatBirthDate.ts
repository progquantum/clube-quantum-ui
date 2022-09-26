export function formatBirthDate(date: string) {
  const preFormattedDate = date.replace(/[^\d]/g, '');
  const formattedDateLenght = preFormattedDate.length;
  const dateLength = date.length;
  let formattedDate = date;

  if (!formattedDateLenght) {
    formattedDate = preFormattedDate.replace(/(\d{1,2})/g, '$1/');
  } else if (formattedDateLenght <= 4) {
    formattedDate = preFormattedDate.replace(/(\d{2})(\d{1,2})/g, '$1/$2');
  } else if (formattedDateLenght <= 8) {
    formattedDate = preFormattedDate.replace(
      /(\d{2})(\d{2})(\d{1,4})/g,
      '$1/$2/$3',
    );
  }

  if (dateLength > 10) {
    date.substring(0, dateLength - 1);
  }

  return formattedDate;
}
