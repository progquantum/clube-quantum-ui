const removeTimeFromDate = (date: Date) => date.toISOString().split('T')[0];

export const compareISODates = (date1: Date, date2: Date) => {
  if (removeTimeFromDate(date1) !== removeTimeFromDate(date2)) {
    return false;
  }

  return true;
};
