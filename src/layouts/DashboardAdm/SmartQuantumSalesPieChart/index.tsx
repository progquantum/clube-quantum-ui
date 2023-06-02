/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
import {
  PieChart as PieChar,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Surface,
} from 'recharts';

import * as S from './styles';

const data = [
  { name: 'Clientes não associados', value: 25 },
  { name: 'Clientes Quantum', value: 75 },
];

const COLORS = ['#878787', '#0C61FF'];

export function SmartQuantumSalesPieChart() {
  return (
    <S.ChartContainer>
      <S.Title>Vendas Quantum Smart</S.Title>

      <ResponsiveContainer width="99%" height="100%">
        <PieChar width={400} height={400}>
          <Pie
            data={data}
            labelLine={false}
            label={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {data?.map((_, index) => (
              <Cell
                key={`cell-${index}`}
                fill={COLORS[index % COLORS.length]}
              />
            ))}
          </Pie>
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
                    gap: '5px',
                  }}
                  className="custom-legend"
                >
                  {payload?.map((entry, index) => (
                    <div
                      style={{
                        display: 'flex',
                        alignItems: 'center',
                        justifyContent: 'center',
                      }}
                      className="custom-legend-item"
                    >
                      <Surface key={`item-${index}`} width={10} height={10}>
                        <circle cx={5} cy={5} r={5} fill={entry.color} />
                      </Surface>
                      <span
                        style={{
                          marginLeft: '5px',
                          fontFamily: 'Montserrat',
                        }}
                        className="custom-legend-text"
                      >
                        {entry.value}
                      </span>
                    </div>
                  ))}
                </ul>
              );
            }}
          />
        </PieChar>
      </ResponsiveContainer>
    </S.ChartContainer>
  );
}
