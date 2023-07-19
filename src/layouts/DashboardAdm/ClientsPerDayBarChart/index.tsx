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

import { useMemo } from 'react';

import { ClientsPerDay } from 'hooks/dashboard-adm/useGetDashboardADM/types';

import * as S from './styles';
import { ClientsPerDayLabels } from './types';

export function ClientsPerDayBarChart({
  clientsPerDay,
}: {
  clientsPerDay: ClientsPerDay;
}) {
  const formattedData = useMemo(
    () =>
      Object.keys(clientsPerDay).map(key => ({
        name: ClientsPerDayLabels[key],
        faturamento: clientsPerDay[key],
      })),
    [clientsPerDay],
  );

  return (
    <S.ChartContainer>
      <S.Title>Clientes por dia</S.Title>
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
          <Bar dataKey="faturamento" fill="#F86624" />
          <Tooltip />
          <Legend />
        </BarChar>
      </ResponsiveContainer>
    </S.ChartContainer>
  );
}
