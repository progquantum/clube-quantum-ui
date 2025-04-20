/* eslint-disable react/no-array-index-key */
/* eslint-disable react/no-unstable-nested-components */
import {
  CartesianGrid,
  Legend,
  Line,
  LineChart as LineChar,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts';
import { v4 } from 'uuid';

import { MonthlyRevenue } from 'hooks/dashboard-adm/useGetDashboardADM/types';
import { formatPrice } from 'utils/formatters/formatPrice';

import * as S from './styles';

export function SalesByRevenueTypeLineChart({
  monthlyRevenue,
}: {
  monthlyRevenue?: MonthlyRevenue;
}) {
  // Se não tiver dados, mostra um componente de carregamento ou retorna null
  if (!monthlyRevenue) {
    return (
      <S.ChartContainer>
        <S.Title>Comparação de vendas por tipo de receita.</S.Title>
        <S.LoadingContainer>Carregando dados...</S.LoadingContainer>
      </S.ChartContainer>
    );
  }

  // Verifica se os arrays necessários existem
  if (
    !monthlyRevenue.subscriptions ||
    !monthlyRevenue.commissions ||
    !monthlyRevenue.marketplaceSubscriptions
  ) {
    return (
      <S.ChartContainer>
        <S.Title>Comparação de vendas por tipo de receita.</S.Title>
        <S.EmptyDataContainer>Não há dados disponíveis</S.EmptyDataContainer>
      </S.ChartContainer>
    );
  }

  // Processar os dados para o formato esperado pelo gráfico
  // Como os dados são arrays de objetos DateRangeData, precisamos extrair as chaves e valores
  const formattedDashboardData = [];

  // Verificar se temos dados em cada array
  if (
    monthlyRevenue.subscriptions.length > 0 &&
    monthlyRevenue.commissions.length > 0 &&
    monthlyRevenue.marketplaceSubscriptions.length > 0
  ) {
    // Iterar pelos objetos em cada array
    monthlyRevenue.subscriptions.forEach(subscriptionItem => {
      // Para cada objeto DateRangeData, extrair suas chaves (datas)
      Object.keys(subscriptionItem).forEach(date => {
        // Procurar valores correspondentes nos outros arrays
        const marketplaceValue =
          monthlyRevenue.marketplaceSubscriptions.find(
            item => item[date] !== undefined,
          )?.[date] || 0;

        const commissionValue =
          monthlyRevenue.commissions.find(item => item[date] !== undefined)?.[
            date
          ] || 0;

        const subscriptionValue = subscriptionItem[date] || 0;

        // Garantir que os valores sejam números antes de chamar .toFixed()
        const marketplaceNumValue = Number(marketplaceValue);
        const commissionNumValue = Number(commissionValue);
        const subscriptionNumValue = Number(subscriptionValue);

        // Garantir que a chave date seja uma string válida
        // Algumas chaves como "ABR." podem causar problemas se não forem tratadas corretamente
        const formattedDate = String(date).trim();

        // Adicionar ao array formatado
        formattedDashboardData.push({
          // Garantir que name seja sempre uma string
          name: formattedDate,
          Marketplace: !Number.isNaN(marketplaceNumValue)
            ? parseFloat(marketplaceNumValue.toFixed(2))
            : 0,
          Cashback: !Number.isNaN(commissionNumValue)
            ? parseFloat(commissionNumValue.toFixed(2))
            : 0,
          Planos: !Number.isNaN(subscriptionNumValue)
            ? parseFloat(subscriptionNumValue.toFixed(2))
            : 0,
        });
      });
    });
  }

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
          <XAxis dataKey="name" tickFormatter={value => String(value)} />
          <YAxis />
          <Tooltip formatter={value => [formatPrice(String(value || 0)), '']} />
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
                      {String(entry.value)}
                    </li>
                  ))}
                </ul>
              );
            }}
          />
          <Line
            type="monotone"
            dataKey="Marketplace"
            stroke="#3CD2A2"
            name="Marketplace"
          />
          <Line
            type="monotone"
            dataKey="Cashback"
            stroke="#F86624"
            activeDot={{ r: 8 }}
            name="Cashback"
          />
          <Line
            type="monotone"
            dataKey="Planos"
            stroke="#0C61FF"
            name="Planos"
          />
          <Legend />
        </LineChar>
      </ResponsiveContainer>
    </S.ChartContainer>
  );
}
