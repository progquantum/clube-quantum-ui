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

import * as S from './styles';

const data = [
  {
    name: 'JAN',
    Marketplace: 2400,
    Cashback: 3000,
    Planos: 2400,
  },
  {
    name: 'MAR',
    Marketplace: 2300,
    Cashback: 3150,
    Planos: 2000,
  },
  {
    name: 'MAI',
    Marketplace: 1900,
    Cashback: 2000,
    Planos: 1500,
  },
  {
    name: 'JUL',
    Marketplace: 2000,
    Cashback: 2150,
    Planos: 1600,
  },
  {
    name: 'SET',
    Marketplace: 2100,
    Cashback: 2200,
    Planos: 1700,
  },
  {
    name: 'NOV',
    Marketplace: 2150,
    Cashback: 2300,
    Planos: 1800,
  },
];

export function LineChart() {
  return (
    <S.Line>
      <S.Title>Comparação de vendas por tipo de receita.</S.Title>
      <ResponsiveContainer width="99%" height="100%">
        <LineChar
          data={data}
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
                  {payload?.map((entry, index) => (
                    <li key={`item-${index}`}>
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
    </S.Line>
  );
}
