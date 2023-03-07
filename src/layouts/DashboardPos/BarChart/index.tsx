import React from 'react';
import { Chart } from 'react-google-charts';

import { Container, SubTitle, Title } from './styles';

export function BarChart() {
  const data = [
    ['Mês', 'Vendas'],
    ['Jan', 50],
    ['Fev', 100],
    ['Mar', 150],
    ['Abr', 170],
    ['Mai', 170],
  ];

  const options = {
    colors: ['#F86624'],
    legend: { position: 'none' },
    bars: 'horizontal',
  };
  return (
    <Container>
      <Title>Progressão geral de vendas</Title>
      <SubTitle>primeiro semestre de 2022</SubTitle>
      <Chart
        chartType="Bar"
        width="100%"
        height="218px"
        data={data}
        options={options}
      />
    </Container>
  );
}
