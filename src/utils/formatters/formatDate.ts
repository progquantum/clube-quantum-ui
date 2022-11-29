export const formatDate = (date: string) => {
  const invactivatedAt = new Date(date);
  return new Intl.DateTimeFormat('pt-BR').format(invactivatedAt);
};
