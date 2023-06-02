import React from 'react';

import {
  Bar,
  BarChart,
  CartesianGrid,
  Legend,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';

import { useTheme } from 'styled-components';

import { useGetSalesProgression } from 'hooks/dashboard-pos/useSalesProgression';

import { useSidebarStore } from 'store/sidebar';

import { SubTitle } from './styles';
import {
  ChartContainer,
  ChartContainerTitle,
  OverallSalesProgressionBarChartContainer,
} from '../styles';

export function OverallSalesProgressionBarChart() {
  const { data } = useGetSalesProgression();

  const { colors } = useTheme();
  const isSidebarOpen = useSidebarStore(state => state.isExpanded);

  const dataWithoutSale = [
    { month: 'Jan', total: 100 },
    { month: 'Fev', total: 200 },
    { month: 'Mar', total: 300 },
    { month: 'Jan', total: 100 },
    { month: 'Fev', total: 200 },
    { month: 'Abr', total: 400 },
  ];
  return (
    <OverallSalesProgressionBarChartContainer isSideBarExpanded={isSidebarOpen}>
      <ChartContainerTitle>Progressão geral de vendas</ChartContainerTitle>
      <SubTitle>primeiro semestre de 2022</SubTitle>
      <ResponsiveContainer width="99%" height="100%">
        <BarChart
          data={dataWithoutSale}
          margin={{
            top: 60,
            right: 5,
            left: 0,
            bottom: -10,
          }}
        >
          <CartesianGrid strokeDasharray="3 3" />
          <XAxis dataKey="month" />
          <YAxis />
          <Bar dataKey="total" fill={colors.orangeRed} />
          <Legend />
          <Tooltip />
        </BarChart>
      </ResponsiveContainer>
    </OverallSalesProgressionBarChartContainer>
  );
}
