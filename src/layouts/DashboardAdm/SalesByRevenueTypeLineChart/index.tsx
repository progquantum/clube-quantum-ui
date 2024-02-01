/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
import {
  LineChart as LineChar,
  Line,
  XAxis,
  YAxis,
  CartesianGrid,
  Tooltip,
  Legend,
  ResponsiveContainer,
} from 'recharts';
import { v4 } from 'uuid';

import { MonthlyRevenue } from 'hooks/dashboard-adm/useGetDashboardADM/types';

import * as S from './styles';
import { Months } from './types';

const monthlyRevenueFallback = {
  subscriptions: {
    '2023-3': 0,
    '2023-4': 0,
    '2023-5': 0,
    '2023-6': 0,
    '2023-7': 0,
    '2023-8': 0,
  },
  commissions: {
    '2023-3': 0,
    '2023-4': 0,
    '2023-5': 0,
    '2023-6': 0,
    '2023-7': 0,
    '2023-8': 0,
  },
  marketplaceSubscriptions: {
    '2023-3': 0,
    '2023-4': 0,
    '2023-5': 0,
    '2023-6': 0,
    '2023-7': 0,
    '2023-8': 0,
  },
};
export function SalesByRevenueTypeLineChart({
  monthlyRevenue = monthlyRevenueFallback,
}: {
  monthlyRevenue: MonthlyRevenue;
}) {
  const formattedDashboardData = Object.keys(monthlyRevenue.subscriptions).map(
    (key: string) => {
      // eslint-disable-next-line @typescript-eslint/no-unused-vars
      const [_, month] = key.split('-');
      return {
        name: Months[month],
        Marketplace: parseFloat(
          monthlyRevenue.marketplaceSubscriptions[key].toFixed(2),
        ),
        Cashback: parseFloat(monthlyRevenue.commissions[key].toFixed(2)),
        Planos: parseFloat(monthlyRevenue.subscriptions[key].toFixed(2)),
      };
    },
  );

  return (
    <S.ChartContainer>
      <S.Title>Comparação de vendas por tipo de receita.</S.Title>
      <ResponsiveContainer width="99%" height="100%">
        <LineChar
          data={formattedDashboardData}
          margin={{
            top: 5,
            right: 30,
            left: 20,
            bottom: 5,
          }}
        >
          <CartesianGrid strokeDasharray="3 0" />
          <XAxis dataKey="name" />
          <YAxis />
          <Tooltip />
          <Legend
            content={props => {
              const { payload } = props;

              return (
                <ul
                  style={{
                    display: 'flex',
                    alignItems: 'center',
                    justifyContent: 'center',
                    flexWrap: 'wrap',
                  }}
                  className="custom-legend"
                >
                  {payload?.map(entry => (
                    <li key={v4()}>
                      <span
                        className="legend-color"
                        style={{ backgroundColor: entry.color }}
                      />
                      {entry.value}
                    </li>
                  ))}
                </ul>
              );
            }}
          />
          <Line type="monotone" dataKey="Marketplace" stroke="#3CD2A2" />
          <Line
            type="monotone"
            dataKey="Cashback"
            stroke="#F86624"
            activeDot={{ r: 8 }}
          />
          <Line type="monotone" dataKey="Planos" stroke="#0C61FF" />
          <Tooltip />
          <Legend />
        </LineChar>
      </ResponsiveContainer>
    </S.ChartContainer>
  );
}
