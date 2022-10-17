const y = new Date().getFullYear();
const m = new Date().getMonth();
const d = new Date().getDay();

export const currentDate = `${d.toLocaleString.length < 2 ? `0${d}` : d}/${
  m.toLocaleString.length < 2 ? `0${m}` : m
}/${y}`;
