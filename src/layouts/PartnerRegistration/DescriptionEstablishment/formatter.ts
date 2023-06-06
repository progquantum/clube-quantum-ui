import { CashBackRules, OpenHours } from 'store/partner-registration/types';

interface RulesCashback {
  total_cashback: string;
  client_cashback: string;
  adm_cashback: string;
  days_of_week: string[];
}

export const convertCashBackRulesToRulesCashback = (
  cashBackRules: CashBackRules,
): RulesCashback[] => {
  const daysOfWeekMap: { [key: string]: string } = {
    Segunda: 'MONDAY',
    Terça: 'TUESDAY',
    Quarta: 'WEDNESDAY',
    Quinta: 'THURSDAY',
    Sexta: 'FRIDAY',
    Sábado: 'SATURDAY',
    Domingo: 'SUNDAY',
  };

  return cashBackRules.map(
    ({ selectDays, rateCashBack, rateCliente, rateAdm }) => {
      const total_cashback = rateCashBack;
      const client_cashback = rateCliente;
      const adm_cashback = rateAdm;
      const days_of_week = selectDays.map(day => daysOfWeekMap[day]);

      return {
        total_cashback,
        client_cashback,
        adm_cashback,
        days_of_week,
      };
    },
  );
};

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

interface MachinePos {
  id: string;
  serie: string;
}

export const convertMachinePosToPosSerialNumbers = (
  machinePos: MachinePos[],
): string[] => machinePos.map(({ serie }) => serie);
