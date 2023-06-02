/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
import {
  PieChart,
  Pie,
  Surface,
  Cell,
  Legend,
  ResponsiveContainer,
} from 'recharts';

import * as S from './styles';

const data = [
  { name: 'Quantum Free', value: 20 },
  { name: 'Quantum Start', value: 30 },
  { name: 'Quantum Select', value: 40 },
  { name: 'Inativo', value: 10 },
];
const COLORS = ['#00C49F', '#F86624', '#0C61FF', '#BBBBBB'];

const total = data.reduce((sum, entry) => sum + entry.value, 0);
const CenterLabel = ({ children }) => (
  <text
    x="50%"
    y="50%"
    fill="black"
    textAnchor="middle"
    dominantBaseline="middle"
  >
    {children}
  </text>
);
const centerLabel = (
  <CenterLabel>
    {' '}
    <tspan x="50%" dy="0">
      {total}
    </tspan>
    <tspan x="50%" dy="1.2em" fontSize="14px">
      Clientes
    </tspan>
  </CenterLabel>
);

// ...

export function ClientsByPlanPieChart() {
  return (
    <S.ChartContainer>
      <S.Title>Clientes por plano</S.Title>
      <ResponsiveContainer width="99%" height="100%">
        <PieChart width={800} height={400}>
          <Pie
            data={data}
            innerRadius={65}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            label={centerLabel}
            labelLine={false}
          >
            {data.map((_, index) => (
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
                        style={{ marginLeft: '5px', fontFamily: 'Montserrat' }}
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
        </PieChart>
      </ResponsiveContainer>
    </S.ChartContainer>
  );
}
