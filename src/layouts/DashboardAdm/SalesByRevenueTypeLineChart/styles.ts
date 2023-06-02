import styled from 'styled-components';

export const ChartContainer = styled.div`
  grid-area: SalesByRevenueTypeLineChart;
  width: 100%;
  height: 358px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  background: #ffffff;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.09);
  border-radius: 4px;
  padding: 20px;

  @media (max-width: 445px) {
    height: 390px;
  }
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 10px;
`;
