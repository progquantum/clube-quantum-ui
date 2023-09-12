/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
import {
  PieChart as PieChar,
  Pie,
  Cell,
  Legend,
  ResponsiveContainer,
  Surface,
  Tooltip,
} from 'recharts';
import { v4 } from 'uuid';

import { PosSalesPerCustomer } from 'hooks/dashboard-adm/useGetDashboardADM/types';

import * as S from './styles';

const dataFallback = [
  { name: 'Clientes não associados', value: 25 },
  { name: 'Clientes Quantum', value: 75 },
];

const COLORS = ['#878787', '#0C61FF'];

export function SmartQuantumSalesPieChart({
  posSalesPerCustomer,
}: {
  posSalesPerCustomer: PosSalesPerCustomer;
}) {
  const mappedLabels = {
    client_quantum: 'Clientes Quantum',
    non_affiliated_client: 'Clientes não associados',
  };

  const formattedData = posSalesPerCustomer
    ? Object.keys(posSalesPerCustomer).map(key => ({
        name: mappedLabels[key],
        value: posSalesPerCustomer[key],
      }))
    : dataFallback;

  return (
    <S.ChartContainer>
      <S.Title>Vendas Quantum Smart</S.Title>

      <ResponsiveContainer width="99%" height="100%">
        <PieChar width={400} height={400}>
          <Pie
            data={formattedData}
            labelLine={false}
            label={false}
            outerRadius={80}
            fill="#8884d8"
            dataKey="value"
          >
            {formattedData.map((_, index) => (
              <Cell key={v4()} fill={COLORS[index % COLORS.length]} />
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
                      key={v4()}
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
          <Tooltip />
        </PieChar>
      </ResponsiveContainer>
    </S.ChartContainer>
  );
}
