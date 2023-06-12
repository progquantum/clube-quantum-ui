import { CashBackRules } from 'store/partner-registration/types';

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
