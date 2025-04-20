/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
import {
  Cell,
  Legend,
  Pie,
  PieChart,
  ResponsiveContainer,
  Surface,
  Tooltip,
} from 'recharts';

import { v4 } from 'uuid';

import { ClientsPerPlan } from 'hooks/dashboard-adm/useGetDashboardADM/types';

import * as S from './styles';
import { ClientsPerPlanLabels } from './types';

export function ClientsByPlanPieChart({
  clientsPerPlan,
}: {
  clientsPerPlan?: ClientsPerPlan;
}) {
  // Se não tiver dados, mostra um componente de carregamento
  if (!clientsPerPlan) {
    return (
      <S.ChartContainer>
        <S.Title>Clientes por plano</S.Title>
        <S.LoadingContainer>Carregando dados...</S.LoadingContainer>
      </S.ChartContainer>
    );
  }
  // Verificar se há dados para exibir
  if (Object.keys(clientsPerPlan).length === 0) {
    return (
      <S.ChartContainer>
        <S.Title>Clientes por plano</S.Title>
        <S.EmptyDataContainer>Não há dados disponíveis</S.EmptyDataContainer>
      </S.ChartContainer>
    );
  }

  // Verificar se todos os valores de planos são zero
  const hasNonZeroValues = Object.keys(clientsPerPlan)
    .filter(key => key !== 'total_clients')
    .some(key => clientsPerPlan[key] > 0);

  if (!hasNonZeroValues) {
    return (
      <S.ChartContainer>
        <S.Title>Clientes por plano</S.Title>
        <S.EmptyDataContainer>
          Não há clientes cadastrados em nenhum plano
        </S.EmptyDataContainer>
      </S.ChartContainer>
    );
  }

  // Processar os dados para o gráfico
  // Garantir que todos os valores sejam strings ou números primitivos
  const formattedData = Object.keys(clientsPerPlan)
    .filter(key => key !== 'total_clients')
    .map(key => ({
      // Converter nome para string para evitar problemas de renderização
      name: String(ClientsPerPlanLabels[key] || key),
      // Garantir que o valor seja um número
      value: Number(clientsPerPlan[key]),
    }));

  const COLORS = ['#00C49F', '#F86624', '#0C61FF', '#BBBBBB'];

  const CenterLabel = ({ children }) => (
    <text
      x="50%"
      y="40%"
      fill="black"
      textAnchor="middle"
      dominantBaseline="middle"
    >
      {children}
    </text>
  );

  const centerLabel = (
    <CenterLabel>
      <tspan x="50%">{String(clientsPerPlan.total_clients)}</tspan>
      <tspan x="50%" dy="1.2em" fontSize="14px">
        Clientes
      </tspan>
    </CenterLabel>
  );

  return (
    <S.ChartContainer>
      <S.Title>Clientes por plano</S.Title>
      <ResponsiveContainer width="99%" height="100%">
        <PieChart width={800} height={400}>
          <Pie
            data={formattedData}
            innerRadius={65}
            outerRadius={80}
            fill="#8884d8"
            paddingAngle={5}
            dataKey="value"
            nameKey="name"
            label={centerLabel}
            labelLine={false}
            isAnimationActive={false}
          >
            {formattedData.map((item, index) => (
              <Cell
                key={`cell-${index}-${v4()}`}
                fill={COLORS[index % COLORS.length]}
                name={String(item.name)}
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
                        style={{ marginLeft: '5px', fontFamily: 'Montserrat' }}
                        className="custom-legend-text"
                      >
                        {String(entry.value)}
                      </span>
                    </div>
                  ))}
                </ul>
              );
            }}
          />
          <Tooltip
            formatter={value => [String(value || 0), '']}
            labelFormatter={label => String(label || '')}
            isAnimationActive={false}
          />
        </PieChart>
      </ResponsiveContainer>
    </S.ChartContainer>
  );
}
