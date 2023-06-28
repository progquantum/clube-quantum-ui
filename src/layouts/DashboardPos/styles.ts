import styled, { css } from 'styled-components';

import { Button } from 'components/Button';

import { ButtonProps, StateProps } from './types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 1400px;
  @media (max-width: 1440px) {
    max-width: 1000px;
  }
  @media (max-width: 1250px) {
    max-width: 900px;
  }

  @media (max-width: 1100px) {
    max-width: 800px;
  }

  @media (max-width: 1000px) {
    max-width: 700px;
  }

  @media (max-width: 900px) {
    max-width: 650px;
  }

  @media (max-width: 780px) {
    max-width: 450px;
  }
  @media (max-width: 600px) {
    max-width: 400px;
  }
  @media (max-width: 469px) {
    max-width: 330px;
  }
`;

export const DivColumn = styled.div`
  width: 100%;
  display: flex;
  flex-direction: column;
`;

export const DivRow = styled.div`
  width: 100%;
  max-width: 497.5px;
  display: flex;
  align-items: center;
  gap: 12px;
`;

export const Title = styled.h3`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  margin-bottom: 12px;
  color: ${({ theme }) => theme.colors.gray[700]};

  @media (max-width: 469px) {
    font-size: 12px;
  }
`;

export const PjName = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 16px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};

  @media (max-width: 469px) {
    font-size: 12px;
  }
`;

export const StatePJ = styled.h3<StateProps>`
  ${({ state }) => css`
    font-style: normal;
    font-weight: 700;
    font-size: 12px;
    line-height: 150%;
    color: ${({ theme }) =>
      state ? theme.colors.successLight : theme.colors.danger};

    @media (max-width: 469px) {
      font-size: 10px;
    }
  `}
`;

export const DivBalance = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: flex-start;
  padding: 12px;
  gap: 4px;
  width: 115px;
  height: 61px;
  background: #ffffff;
  box-shadow: 0px 0px 12px rgba(0, 0, 0, 0.1);
  border-radius: 15px;
`;

export const BalanceTitle = styled.h3`
  font-style: normal;
  font-weight: 500;
  font-size: 10px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[400]};
  margin-bottom: 0;
`;

export const BalanceValue = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 0;

  @media (max-width: 469px) {
    font-size: 10px;
  }
`;

export const DivTop = styled.div`
  display: flex;
  max-width: 497.5px;
  justify-content: space-between;
  align-items: center;
`;

export const DivCnpj = styled.div`
  display: flex;
  width: 100%;
  max-width: 497.5px;
  gap: 12px;
  @media (max-width: 782px) {
    flex-direction: column;
    gap: 0;
  }
`;

export const CNPJData = styled.p`
  margin-top: 12px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 0;
`;

export const Hifen = styled(CNPJData)`
  @media (max-width: 782px) {
    display: none;
  }
`;

export const ButtonUnderline = styled(Button)<ButtonProps>`
  ${({ filter }) => css`
    margin-top: 10px;
    max-width: 200px;
    font-style: normal;
    font-weight: 600;
    font-size: 14px;
    height: 30px;
    display: flex;
    align-items: center;
    justify-content: flex-start;
    padding: 0;
    color: ${({ theme }) =>
      filter ? theme.colors.midnightBlue : theme.colors.gray[300]};

    background: transparent;
    &:hover {
      background: transparent;
      color: ${({ theme }) => theme.colors.midnightBlue};
      opacity: 0.7;
    }
  `}
`;

export const ContainerTable = styled.div`
  width: 100%;

  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.09);
  @media (max-width: 1765px) {
    width: 1035px;
  }
`;

export const TopTable = styled.div`
  max-width: 1035px;
  width: 100%;
  padding: 0px 10px;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: space-around;
  height: 40px;
  background: ${({ theme }) => theme.colors.ghostwhite};
  border-radius: 10px 10px 0 0;
  @media (max-width: 1765px) {
    width: 1035px;
  }
`;

export const TopParams = styled.h2`
  width: 100%;
  max-width: 74px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 0;
`;

export const TopParams1 = styled(TopParams)`
  max-width: 320px;
`;

export const TopParams2 = styled(TopParams)`
  max-width: 161px;
`;
export const TopParams3 = styled(TopParams)`
  max-width: 120px;
`;

export const TopParams4 = styled(TopParams)`
  max-width: 92px;
`;

export const Table = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  padding: 30px 10px;
  gap: 48px;
  max-width: 1035px;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.09);
  border-radius: 0px 0px 10px 10px;
  @media (max-width: 1765px) {
    width: 1035px;
  }
`;

export const TableRow = styled.div`
  display: flex;
  align-items: center;
  justify-content: space-around;
  width: 100%;
`;

export const Date = styled.p`
  width: 100%;
  max-width: 74px;
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 0;
`;

export const ID = styled.p`
  width: 100%;
  max-width: 320px;
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 0;
`;

export const TableColumn = styled.div`
  display: flex;
  flex-direction: column;
  max-width: 161px;
  width: 100%;
`;

export const StatusTrans = styled.p`
  font-style: normal;
  font-weight: 700;
  font-size: 12px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.successLight};
  margin-bottom: 0;
`;

export const Font14 = styled.p`
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-bottom: 0;
`;

export const FontGray400 = styled.p`
  font-style: normal;
  font-weight: 500;
  font-size: 12px;
  line-height: 150%;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const TableColumn2 = styled(TableColumn)`
  max-width: 120px;
`;

export const TableColumn3 = styled(TableColumn)`
  max-width: 92px;
`;
export const ContainerFlag = styled.div`
  width: 100%;
  height: 100%;
  max-width: 505px;
  display: flex;
  flex-direction: column;
  @media (max-width: 1775px) {
    max-width: 1035px;
  }
`;
export const TopTableSealsByFlag = styled.div`
  max-width: 505px;
  padding: 0px 10px;
  gap: 10px;
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  height: 100%;
  height: 40px;
  background: ${({ theme }) => theme.colors.ghostwhite};
  border-radius: 10px 10px 0 0;
  @media (max-width: 1775px) {
    max-width: 1035px;
  }
`;

export const TitleSealsByFlag = styled.h2`
  font-style: normal;
  font-weight: 500;
  font-size: 14px;
  line-height: 150%;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.gray[300]};
  @media (max-width: 600px) {
    display: none;
  }
`;

export const SubTitleSealsByFlag = styled.h2`
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  margin-bottom: 0;
  color: ${({ theme }) => theme.colors.mediumslateBlue};
`;

export const ValueFlag = styled.p`
  width: 100%;
  max-width: 90px;
  font-style: normal;
  font-weight: 700;
  font-size: 14px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[400]};
  margin-bottom: 0;
`;

export const TableFlag = styled.div`
  display: flex;
  flex-direction: column;
  padding: 30px 19px;
  gap: 32px;
  max-width: 505px;
  width: 100%;
  background: ${({ theme }) => theme.colors.background};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.09);
  border-radius: 0px 0px 10px 10px;
  @media (max-width: 1775px) {
    max-width: 1035px;
  }
`;

export const ContentCards = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const TableFlagRow = styled.div`
  display: flex;
  align-items: center;
  gap: 21px;
  font-style: normal;
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const TableColumn4 = styled.div`
  display: flex;
  flex-direction: column;
`;

export const ChartContainer = styled.div<{ isSideBarExpanded: boolean }>`
  flex: 1;
  padding: 1rem;
  background-color: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.09);
  border-radius: 0.3rem;
  height: 21.5rem;
  position: relative;
`;

export const PaymentMethodPieChartContainer = styled(ChartContainer)`
  grid-area: PaymentMethodPieChart;
`;

export const SalesByClientPieChartContainer = styled(ChartContainer)`
  grid-area: SalesByClientPieChart;
`;

export const OverallSalesProgressionBarChartContainer = styled(ChartContainer)`
  grid-area: OverallSalesProgressionBarChart;
`;

export const ChartContainerTitle = styled.h2`
  font-size: 1.2rem;
  position: absolute;
  left: 1rem;
  top: 1rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  @media (max-width: 469px) {
    font-size: 0.9rem;
  }
`;

export const DivGraphics = styled.div<{ isSideBarExpanded: boolean }>`
  width: 100%;
  height: 100%;
  margin-top: 2rem;
  align-items: center;
  display: grid;
  gap: 0.5rem;
  ${({ isSideBarExpanded }) =>
    isSideBarExpanded
      ? css`
          grid-template-columns: repeat(2, 1fr);
          grid-template-areas:
            'PaymentMethodPieChart SalesByClientPieChart'
            'OverallSalesProgressionBarChart OverallSalesProgressionBarChart';

          @media (max-width: 1400px) {
            max-width: 850px;
          }
          @media (max-width: 1250px) {
            max-width: 650px;
          }

          @media (max-width: 1050px) {
            max-width: 550px;
            grid-template-columns: 1fr;
            grid-template-areas:
              'PaymentMethodPieChart'
              'SalesByClientPieChart'
              'OverallSalesProgressionBarChart';
          }
          @media (max-width: 950px) {
            max-width: 450px;
            grid-template-columns: 1fr;
            grid-template-areas:
              'PaymentMethodPieChart'
              'SalesByClientPieChart'
              'OverallSalesProgressionBarChart';
          }
        `
      : css`
          grid-template-columns: repeat(3, 33%);
          grid-template-areas: 'PaymentMethodPieChart SalesByClientPieChart OverallSalesProgressionBarChart';

          @media (max-width: 1775px) {
            grid-template-columns: repeat(2, 1fr);
            grid-template-areas:
              'PaymentMethodPieChart SalesByClientPieChart'
              'OverallSalesProgressionBarChart OverallSalesProgressionBarChart';
            max-width: 1035px;
          }

          @media (max-width: 850px) {
            grid-template-columns: 1fr;
            grid-template-areas:
              'PaymentMethodPieChart'
              'SalesByClientPieChart'
              'OverallSalesProgressionBarChart';
          }
        `}
`;

export const ContentRow = styled.div<{ isExpanded: boolean }>`
  width: 100%;
  height: 100%;
  max-width: 100%;
  margin-top: 24px;
  display: flex;
  gap: 24px;

  ${({ isExpanded }) =>
    isExpanded
      ? css`
          @media (max-width: 1775px) {
            flex-direction: column-reverse;
            align-items: flex-start;
          }
          @media (max-width: 1400px) {
            max-width: 850px;
          }
          @media (max-width: 1250px) {
            max-width: 650px;
          }

          @media (max-width: 1050px) {
            max-width: 550px;
          }
          @media (max-width: 950px) {
            max-width: 450px;
          }
        `
      : css`
          @media (max-width: 1775px) {
            flex-direction: column-reverse;
            align-items: flex-start;
          }

          max-width: 100%;
        `}
`;

export const PaginationContainer = styled.div`
  margin: 1rem 0 0 0;
`;

export const ContainerDatePicker = styled.div`
  display: flex;
  margin-top: 18px;
  gap: 24px;

  @media (max-width: 780px) {
    flex-direction: column;
    gap: 10px;
  }
`;
