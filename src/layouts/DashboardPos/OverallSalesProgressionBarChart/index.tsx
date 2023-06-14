import dayjs from 'dayjs';

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
  ChartContainerTitle,
  OverallSalesProgressionBarChartContainer,
} from '../styles';

export function OverallSalesProgressionBarChart() {
  const { data } = useGetSalesProgression();
  const year = dayjs().year();

  const { colors } = useTheme();
  const isSidebarOpen = useSidebarStore(state => state.isExpanded);

  const dataWithoutSale = [
    { month: 'Jan', total: 0 },
    { month: 'Fev', total: 0 },
    { month: 'Mar', total: 0 },
    { month: 'Jan', total: 0 },
    { month: 'Fev', total: 0 },
    { month: 'Abr', total: 0 },
  ];

  function convertData(data) {
    const months = [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ];
    return data?.map(item => ({
      month: months[item.month - 1],
      total: parseInt(item.total, 10),
    }));
  }

  const dataConvert = convertData(data);

  return (
    <OverallSalesProgressionBarChartContainer isSideBarExpanded={isSidebarOpen}>
      <ChartContainerTitle>Progressão geral de vendas</ChartContainerTitle>
      <SubTitle>primeiro semestre de {year}</SubTitle>
      <ResponsiveContainer width="99%" height="100%">
        <BarChart
          data={dataConvert?.length === 0 ? dataWithoutSale : dataConvert}
          margin={{
            top: 60,
            right: 5,
            left: 0,
            bottom: -10,
          }}
        >
          <Tooltip />
          <CartesianGrid strokeDasharray="3 3" />
          <Bar dataKey="total" fill={colors.orangeRed} />
          <XAxis dataKey="month" />
          <YAxis />
          <Legend />
        </BarChart>
      </ResponsiveContainer>
    </OverallSalesProgressionBarChartContainer>
  );
}
