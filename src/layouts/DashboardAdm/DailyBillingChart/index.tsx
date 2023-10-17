/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
import {
  BarChart as BarChar,
  Bar,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  ResponsiveContainer,
  Legend,
} from 'recharts';

import { DailyBilling } from 'hooks/dashboard-adm/useGetDashboardADM/types';

import * as S from './styles';

const dataFallback = [
  {
    name: 'Hoje',
    faturamento: 12500,
  },
  {
    name: 'Ontem',
    faturamento: 15000,
  },
  {
    name: 'Últimos 3 dias',
    faturamento: 30000,
  },
  {
    name: 'Última semana',
    faturamento: 15000,
  },
];

export function DailyBillingChart({
  dailyBilling,
}: {
  dailyBilling: DailyBilling;
}) {
  const mappedLabels = {
    today: 'Hoje',
    yesterday: 'Ontem',
    lastThreeDays: 'Últimos 3 dias',
    lastSevenDays: 'Última semana',
  };

  const formattedData = dailyBilling
    ? Object.keys(dailyBilling).map(key => ({
        name: mappedLabels[key],
        faturamento: dailyBilling[key],
      }))
    : dataFallback;

  return (
    <S.ChartContainer>
      <S.Title>Faturamento diário</S.Title>
      <ResponsiveContainer width="99%" height="100%">
        <BarChar
          width={400}
          height={300}
          data={formattedData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
          barSize={28}
          layout="vertical"
        >
          <XAxis type="number" />
          <YAxis dataKey="name" type="category" />
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="faturamento" fill="#0C61FF" />
          <Tooltip />
          <Legend />
        </BarChar>
      </ResponsiveContainer>
    </S.ChartContainer>
  );
}
