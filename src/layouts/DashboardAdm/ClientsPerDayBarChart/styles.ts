import styled from 'styled-components';

export const ChartContainer = styled.div`
  grid-area: ClientsByDayBarChart;
  width: 100%;
  height: 352px;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  padding: 0px;
  background: #ffffff;
  border-radius: 4px;
  padding: 20px;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.09);
`;

export const Title = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 10px;
`;

export const LoadingContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;

export const EmptyDataContainer = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  height: 100%;
  font-size: 16px;
  color: ${({ theme }) => theme.colors.gray[500]};
`;
