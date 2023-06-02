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

import * as S from './styles';

const data = [
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

export function BarChart2() {
  return (
    <S.Bar2>
      <S.Title>Clientes por dia</S.Title>
      <ResponsiveContainer width="99%" height="100%">
        <BarChar
          width={400}
          height={300}
          data={data}
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
    </S.Bar2>
  );
}
