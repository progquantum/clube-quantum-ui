export function formatDateToDDMMYYYY(isoDate: string): string {
  const dateObject = new Date(isoDate);
  const day = dateObject.getUTCDate();
  const month = dateObject.getUTCMonth() + 1;
  const year = dateObject.getUTCFullYear();
  const formattedDate = `${day.toString().padStart(2, '0')}/${month
    .toString()
    .padStart(2, '0')}/${year.toString()}`;
  return formattedDate;
}
