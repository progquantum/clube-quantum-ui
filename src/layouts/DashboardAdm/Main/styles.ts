import styled, { css } from 'styled-components';

import { Button } from 'components/Button';

import { ButtonProps } from './types';

export const Container = styled.div<{ isSideBarExpanded: boolean }>`
  display: grid;
  width: 100%;
  grid-template-columns: 1fr 1fr 1fr;
  grid-auto-columns: 1fr;
  grid-template-areas:
    'Head Head Head'
    'Balance Balance Balance'
    'SalesByRevenueTypeLineChart SalesByRevenueTypeLineChart  SmartQuantumSalesPieChart'
    'ClientsByPlanPieChart DailyBillingChart ClientsByDayBarChart';
  margin-top: 2.25rem;
  gap: 1.5rem;

  ${({ isSideBarExpanded }) =>
    isSideBarExpanded &&
    css`
      grid-template-columns: 1fr 1fr;
      grid-template-areas:
        'Head Head'
        'Balance Balance'
        'SalesByRevenueTypeLineChart SalesByRevenueTypeLineChart'
        'SmartQuantumSalesPieChart ClientsByPlanPieChart'
        'DailyBillingChart ClientsByDayBarChart';
    `}

  @media (max-width: 1250px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'Head Head'
      'Balance Balance'
      'SalesByRevenueTypeLineChart SalesByRevenueTypeLineChart'
      'SmartQuantumSalesPieChart ClientsByPlanPieChart'
      'DailyBillingChart ClientsByDayBarChart';
  }

  @media (max-width: 850px) {
    grid-template-columns: 1fr 1fr;
    grid-template-areas:
      'Head Head'
      'Balance Balance'
      'SalesByRevenueTypeLineChart SalesByRevenueTypeLineChart'
      'SmartQuantumSalesPieChart SmartQuantumSalesPieChart'
      'ClientsByPlanPieChart ClientsByPlanPieChart'
      'DailyBillingChart DailyBillingChart'
      'ClientsByDayBarChart ClientsByDayBarChart';
  }
`;

export const Head = styled.div`
  grid-area: Head;
`;
export const Balance = styled.div<{ isSideBarExpanded: boolean }>`
  width: 100%;
  grid-area: Balance;
  gap: 1.5rem;
  display: flex;
  ${({ isSideBarExpanded }) =>
    isSideBarExpanded &&
    css`
      @media (max-width: 1500px) {
        flex-direction: column;
      }
    `}
  @media (max-width: 1070px) {
    flex-direction: column;
  }
`;

export const RowContent = styled.div`
  display: flex;
  width: 100%;
  gap: 1.5rem;
  @media (max-width: 550px) {
    flex-direction: column;
  }
`;

export const ContentBalance = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 20px 24px;
  gap: 12px;
  background: #ffffff;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
  height: 100%;
  max-height: 98.87px;
  width: 100%;
`;

export const TitleBalance = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const ValueBalance = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 18px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const ContainerDatePicker = styled.div`
  display: flex;
  flex-direction: row;
  gap: 16px;
  margin-bottom: 24px;
  max-width: 424px;

  @media (max-width: 768px) {
    flex-direction: column;
  }
`;

export const DivRow = styled.div`
  display: flex;
  flex-direction: row;
  align-items: center;
  gap: 16px;
  margin-bottom: 16px;
`;

export const ButtonUnderline = styled(Button)<ButtonProps>`
  ${({ underline }) => css`
    margin-top: 0;
    max-width: 137px;
    font-style: normal;
    font-weight: 500;
    font-size: 14px;
    line-height: 17px;
    display: flex;
    align-items: center;
    justify-content: center;
    color: ${underline ? '#0C61FF' : '#4A4A4A'};
    border-bottom: ${underline ? '2px solid #0C61FF' : 'none'};
    border-radius: 0;
    color: ${({ theme }) => theme.colors.midnightBlue};
  `}
`;

export const TitleAdm = styled.h2`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const ErrorMessage = styled.div`
  display: flex;
  justify-content: center;
  align-items: center;
  width: 100%;
  padding: 20px;
  margin-top: 20px;
  background-color: #fff;
  border-radius: 8px;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  color: #e74c3c;
  font-size: 16px;
  font-weight: 500;
`;
