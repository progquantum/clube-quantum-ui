import { formatDate } from './formatters/formatDate';

export function generateDeadline(day: number) {
  const today = formatDate(new Date().toString());

  const d = Number(today.split('/')[0]);
  const m = Number(today.split('/')[1]);
  const y = Number(today.split('/')[2]);

  if (day < d && m === 12) {
    return `${day.toString().length < 2 ? `0${day}` : day}/01/${y + 1}`;
  }

  if (day < d) {
    return `${day.toString().length < 2 ? `0${day}` : day}/${
      m.toString().length < 2 ? `0${m + 1}` : m + 1
    }/${y}`;
  }

  if (day >= d && m === 12) {
    return `${day.toString().length < 2 ? `0${day}` : day}/12/${y}`;
  }

  if (day >= d) {
    return `${day.toString().length < 2 ? `0${day}` : day}/${
      m.toString().length < 2 ? `0${m}` : m
    }/${y}`;
  }
}
