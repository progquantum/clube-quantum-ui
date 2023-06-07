import { OpenHours } from 'store/partner-registration/types';

interface HoursOpening {
  opening_time: string;
  closing_time: string;
  days_of_week: string[];
}

interface HoursDetails {
  hoursOpening: HoursOpening[];
  closedDaysOfWeek: string[];
}

export const convertOpenHoursToHoursOpening = (
  openHours: OpenHours,
): HoursDetails => {
  const daysOfWeekMap: { [key: string]: string } = {
    Segunda: 'MONDAY',
    Terça: 'TUESDAY',
    Quarta: 'WEDNESDAY',
    Quinta: 'THURSDAY',
    Sexta: 'FRIDAY',
    Sábado: 'SATURDAY',
    Domingo: 'SUNDAY',
  };

  const daysOfWeekSet: Set<string> = new Set();
  openHours.forEach(({ selectDays }) => {
    selectDays.forEach(day => daysOfWeekSet.add(day));
  });

  const allDaysOfWeek: string[] = [
    'MONDAY',
    'TUESDAY',
    'WEDNESDAY',
    'THURSDAY',
    'FRIDAY',
    'SATURDAY',
    'SUNDAY',
  ];

  const hoursOpening: HoursOpening[] = openHours.map(({ selectDays, time }) => {
    const [openingTime, closingTime] = time?.split(' AS ') || ['', ''];
    const daysOfWeek = selectDays.map(day => daysOfWeekMap[day]);

    return {
      opening_time: openingTime,
      closing_time: closingTime,
      days_of_week: daysOfWeek,
    };
  });

  const closedDaysOfWeek: string[] = allDaysOfWeek.filter(
    day => !hoursOpening.some(({ days_of_week }) => days_of_week.includes(day)),
  );

  return {
    hoursOpening,
    closedDaysOfWeek,
  };
};
