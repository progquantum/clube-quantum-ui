import styled, { css } from 'styled-components';

import { FilterButtonProps } from './types';

export const MyStatementsHeader = styled.h5`
  color: ${({ theme }) => theme.colors.gray[700]};
  font-weight: 900;
  margin: 20px 0 20px 0;
  text-align: center;
`;

export const FilterContainer = styled.div`
  max-width: 30rem;
  padding: 0.1rem;
  display: flex;
  gap: 0.2rem;
  margin: 0 auto 2rem;
  border-radius: 0.5rem;
  background: ${({ theme }) => theme.gradients.mediumsLateBlueToMidnightBlue};
`;

export const FilterButton = styled.button<FilterButtonProps>`
  flex: 1 1 auto;
  padding: 1rem 0;
  border-radius: 0.5rem;
  background-color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.white : 'transparent'};
  color: ${({ isSelected, theme }) =>
    isSelected ? theme.colors.gray[700] : theme.colors.white};

  font-weight: 700;
`;
export const AccountBalanceContainer = styled.div`
  display: flex;
  flex-wrap: wrap;
  gap: 2rem;
  grid-area: AccountBalance;

  @media (max-width: 560px) {
    gap: 1rem;
  }

  @media (max-width: 400px) {
    gap: 0.5rem;
  }
`;

export const AccountBalanceValue = styled.h4`
  color: ${({ theme }) => theme.colors.gray[700]};
  margin: 0.8rem 0;
`;
export const TransferDateText = styled.span`
  color: ${({ theme }) => theme.colors.gray[300]};
`;

export const TitleContainer = styled.div`
  color: ${({ theme }) => theme.colors.gray[400]};
  & > span {
    font-size: 0.75rem;
    margin-left: 0.1rem;
  }
`;
export const EarningsHistoryContainer = styled.div`
  box-shadow: 0 0 1.3rem rgba(0, 0, 0, 0.1);
  border-radius: 0.8rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
`;
export const EarningsHistoryByPartner = styled(EarningsHistoryContainer)`
  min-height: 511.98px;
  height: 100%;
  grid-area: ByPartner;
`;
export const EarningsHistoryByIndication = styled(EarningsHistoryContainer)`
  grid-area: ByIndication;
`;
export const EarningsHistorySubtitle = styled.span`
  color: ${({ theme }) => theme.colors.gray[300]};
  display: inline-block;
  margin: 1rem 0;
  font-size: 0.75rem;
  font-weight: 700;
`;
export const TotalEarningText = styled.h4`
  color: ${({ theme }) => theme.colors.gray[700]};
  margin: 0.2rem 0 1rem;
`;
export const PartnerContainer = styled.div`
  height: 100%;
  min-height: 280px;
  width: 100%;
  min-width: 393.5px;

  @media (max-width: 498px) {
    width: 100%;
    min-width: 250px;
  }
`;

export const PartnerRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 1.5rem 0;
`;

export const IconBox = styled.div`
  background-color: ${({ theme }) => theme.colors.mediumslateBlue};
  border-radius: 50%;
  width: 2rem;
  height: 2rem;
  display: flex;
  flex-shrink: 0;
  justify-content: center;
  align-items: center;
  color: ${({ theme }) => theme.colors.white};
`;

export const PartnerName = styled.h6`
  font-size: 90%;
`;
export const EarningDate = styled.span`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.gray[400]};
`;
export const QuantityGainedText = styled.span`
  display: inline-block;
  margin-left: auto;
  color: ${({ theme }) => theme.colors.successLight};
  align-self: flex-end;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.5rem;
  height: max-content;
  margin-top: auto;
`;
export const PaginationPages = styled.div`
  font-weight: 700;
  color: ${({ theme }) => theme.colors.gray[700]};
`;
export const PaginationButton = styled.div`
  padding: 0.7rem 1.7rem;
  background-color: ${({ theme }) => theme.colors.mediumslateBlue};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0.5rem;
`;

export const MyStatementsContainer = styled.div<{ isExpanded: boolean }>`
  flex: 1 1 auto;
  width: 100%;
  & > div:last-child {
    display: grid;
    grid-template-areas:
      'AccountBalance AccountBalance'
      'ByIndication ByIndication';
    grid-gap: 2rem;

    ${({ isExpanded }) =>
      isExpanded &&
      css`
        @media (max-width: 1150px) {
          grid-template-areas:
            'AccountBalance'
            'ByPartner'
            'ByIndication';

          &:nth-child(3) {
            & > *:not(:nth-child(1)) {
              margin: 0 auto;
            }
          }
        }
      `}

    @media (max-width: 950px) {
      grid-template-areas:
        'AccountBalance'
        'ByPartner'
        'ByIndication';

      &:nth-child(3) {
        & > *:not(:nth-child(1)) {
          margin: 0 auto;
        }
      }
    }
  }
`;
