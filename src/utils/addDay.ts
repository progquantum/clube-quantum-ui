export const addDay = (date: Date, n: number): Date => {
  const d = new Date();
  d.setTime(date.getTime() + n * 24 * 60 * 60 * 1000);
  return d;
};
