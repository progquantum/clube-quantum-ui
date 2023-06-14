import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Text,
} from 'recharts';
import { useTheme } from 'styled-components';

import { useSidebarStore } from 'store/sidebar';

import { ChartContainerTitle, SalesByClientPieChartContainer } from '../styles';
import { SalesByClientProps } from './types';

export function SalesByClientPieChart({ sales_by_client }: SalesByClientProps) {
  const { colors } = useTheme();

  const CHART_COLORS = [colors.gray[400], colors.mediumslateBlue];
  const data = [
    {
      name: 'Clientes não associados',
      value: sales_by_client?.non_affiliated_client,
    },
    { name: 'Clientes Quantum', value: sales_by_client?.client_quantum },
  ];

  const areAllValuesZero = data.every(item => Number(item.value) === 0);
  console.log(data);
  const isSidebarOpen = useSidebarStore(state => state.isExpanded);

  const RADIAN = Math.PI / 180;
  const renderCustomizedLabel = ({
    cx,
    cy,
    midAngle,
    innerRadius,
    outerRadius,
    percent,
  }) => {
    const radius = innerRadius + (outerRadius - innerRadius) * 0.5;
    const x = cx + radius * Math.cos(-midAngle * RADIAN);
    const y = cy + radius * Math.sin(-midAngle * RADIAN);

    return (
      <text
        x={x}
        y={y}
        fill="white"
        textAnchor={x > cx ? 'start' : 'end'}
        dominantBaseline="central"
      >
        {`${(percent * 100).toFixed(0)}%`}
      </text>
    );
  };

  return (
    <SalesByClientPieChartContainer isSideBarExpanded={isSidebarOpen}>
      <ChartContainerTitle>Vendas por cliente</ChartContainerTitle>
      {areAllValuesZero ? (
        <Text
          style={{
            display: 'flex',
            alignItems: 'center',
            justifyContent: 'center',
            marginTop: '150px',
          }}
        >
          Sem dados
        </Text>
      ) : (
        <ResponsiveContainer width="95%">
          <PieChart width={400} height={400}>
            <Pie
              data={data}
              cx="50%"
              cy="50%"
              labelLine={false}
              label={renderCustomizedLabel}
              outerRadius={80}
              fill="#8884d8"
              dataKey="value"
            >
              {data.map((item, index) => (
                <Cell
                  key={`cell-${item.name}`}
                  fill={CHART_COLORS[index % CHART_COLORS.length]}
                />
              ))}
            </Pie>
            <Tooltip />
            <Legend />
          </PieChart>
        </ResponsiveContainer>
      )}
    </SalesByClientPieChartContainer>
  );
}
