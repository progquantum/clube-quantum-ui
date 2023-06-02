import styled from 'styled-components';

export const ChartContainer = styled.div`
  grid-area: DailyBillingChart;
  width: 100%;
  height: 352px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  background: #ffffff;
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.07);
  border-radius: 4px;
  padding: 20px;
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 10px;
`;
