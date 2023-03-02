import React from 'react';
import { Chart } from 'react-google-charts';

import { Container, Title } from './styles';

export function PieChartSales() {
  const data = [
    ['Vendas', 'Vendas por cliente'],
    ['Clientes não associados', 5],
    ['Clientes Quantum', 15],
  ];
  const options = {
    pieSliceText: 'none',
    legend: { position: 'bottom' },
    colors: ['#878787', '#0C61FF'],
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
