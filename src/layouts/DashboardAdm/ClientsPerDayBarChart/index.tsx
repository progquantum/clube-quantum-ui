import {
  Bar,
  BarChart as BarChar,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { useMemo } from 'react';

import { ClientsPerPeriod } from 'hooks/dashboard-adm/useGetDashboardADM/types';

import * as S from './styles';

export function ClientsPerDayBarChart({
  clientsPerDay,
}: {
  clientsPerDay?: ClientsPerPeriod;
}) {
  // Se não tiver dados, mostra um componente de carregamento
  if (!clientsPerDay) {
    return (
      <S.ChartContainer>
        <S.Title>Clientes por Período</S.Title>
        <S.LoadingContainer>Carregando dados...</S.LoadingContainer>
      </S.ChartContainer>
    );
  }

  // Verificar se há dados para exibir
  if (!clientsPerDay.data || clientsPerDay.data.length === 0) {
    return (
      <S.ChartContainer>
        <S.Title>Clientes por Período</S.Title>
        <S.EmptyDataContainer>Não há dados disponíveis</S.EmptyDataContainer>
      </S.ChartContainer>
    );
  }
  // Processar os dados para o formato esperado pelo gráfico
  const formattedData = useMemo(
    () =>
      // Extrair dados do array de DateRangeData
      clientsPerDay.data.map(dataItem => {
        // Cada item é um objeto com uma única chave (mês) e um valor
        const key = Object.keys(dataItem)[0];
        const value = dataItem[key];

        return {
          // Garantir que o nome seja uma string
          name: String(key),
          // Garantir que o valor seja um número
          faturamento: Number(value || 0),
        };
      }),
    [clientsPerDay.data],
  );

  return (
    <S.ChartContainer>
      <S.Title>Clientes por Período</S.Title>
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
          <YAxis
            dataKey="name"
            type="category"
            tickFormatter={value => String(value)}
          />
          <Tooltip
            formatter={value => [String(value || 0), '']}
            labelFormatter={label => String(label || '')}
          />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="faturamento" fill="#F86624" />
          <Tooltip
            formatter={value => [String(value || 0), '']}
            labelFormatter={label => String(label || '')}
          />
          <Legend />
        </BarChar>
      </ResponsiveContainer>
    </S.ChartContainer>
  );
}
