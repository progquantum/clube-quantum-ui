import React, { useEffect, useState } from 'react';
import { Chart } from 'react-google-charts';

import { useGetSalesProgression } from 'hooks/dashboard-pos/useSalesProgression';

import { Container, SubTitle, Title } from './styles';

export function BarChart() {
  const { data } = useGetSalesProgression();
  const [salesData, setSalesData] = useState<Array<[string, string]>>([]);

  const getMonthName = (monthNumber: number) => {
    const months = [
      'Jan',
      'Fev',
      'Mar',
      'Abr',
      'Mai',
      'Jun',
      'Jul',
      'Ago',
      'Set',
      'Out',
      'Nov',
      'Dez',
    ];
    return months[monthNumber - 1];
  };

  useEffect(() => {
    const fetchData = async () => {
      if (data) {
        const transformedData: Array<[string, string]> = data?.map(
          ({ month, total }) => {
            const monthName = getMonthName(month);
            return [monthName, total.toString()];
          },
        );

        setSalesData([['Mês', 'Vendas'], ...transformedData]);
      }
    };
    fetchData();
  }, []);

  const options = {
    colors: ['#F86624'],
    legend: { position: 'none' },
    bars: 'horizontal',
  };

  const dataWithoutSale = [
    ['Mês', 'Vendas'],
    ['Jan', 100],
    ['Fev', 200],
    ['Mar', 300],
    ['Abr', 400],
  ];
  return (
    <Container>
      <Title>Progressão geral de vendas</Title>
      <SubTitle>primeiro semestre de 2022</SubTitle>
      {data?.length > 0 ? (
        <Chart
          chartType="Bar"
          width="100%"
          height="100%"
          data={salesData}
          options={options}
        />
      ) : (
        <Chart
          chartType="Bar"
          width="100%"
          height="100%"
          data={dataWithoutSale}
          options={options}
        />
      )}
    </Container>
  );
}
