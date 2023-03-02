import React from 'react';
import { Chart } from 'react-google-charts';

import { Container, Title } from './styles';

export function PieChart() {
  const data = [
    ['Vendas', 'Vendas por tipo'],
    ['Crédito Parcelado', 2],
    ['Débito', 2],
    ['Crédito à Vista', 7],
  ];
  const options = {
    pieSliceText: 'none',
    legend: { position: 'bottom' },
    colors: ['#0C61FF', '#3CD2A2', '#F86624'],
  };
  return (
    <Container>
      <Title>Histórico por tipo de pagamento</Title>
      <Chart
        chartType="PieChart"
        data={data}
        options={options}
        width="100%"
        height="221px"
      />
    </Container>
  );
}
