export const formatDate = (date: string) => {
  const parsedDate = new Date(date);
  return new Intl.DateTimeFormat('pt-BR').format(parsedDate);
};
