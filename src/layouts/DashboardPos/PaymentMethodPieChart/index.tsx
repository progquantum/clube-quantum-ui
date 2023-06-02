import React from 'react';

import {
  Cell,
  Pie,
  PieChart,
  ResponsiveContainer,
  Tooltip,
  Legend,
} from 'recharts';

import { useSidebarStore } from 'store/sidebar';

import {
  ChartContainer,
  ChartContainerTitle,
  PaymentMethodPieChartContainer,
} from '../styles';

export function PaymentMethodPieChart() {
  const data = [
    { name: 'Crédito Parcelado', value: 2 },
    { name: 'Débito', value: 2 },
    { name: 'Crédito à Vista', value: 7 },
  ];

  const isSidebarOpen = useSidebarStore(state => state.isExpanded);

  const COLORS = ['#0C61FF', '#3CD2A2', '#F86624'];
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
    <PaymentMethodPieChartContainer isSideBarExpanded={isSidebarOpen}>
      <ChartContainerTitle>Histórico por tipo de pagamento</ChartContainerTitle>
      <ResponsiveContainer width="99%">
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
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
          <Tooltip />
          <Legend />
        </PieChart>
      </ResponsiveContainer>
    </PaymentMethodPieChartContainer>
  );
}
