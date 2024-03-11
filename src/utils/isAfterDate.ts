import dayjs from 'dayjs';

export function isAfterDate(date: Date | string) {
  const result = dayjs().isAfter(date, 'hour');

  return result;
}
