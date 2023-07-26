import styled from 'styled-components';

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

export const TitleContainer = styled.div`
  color: ${({ theme }) => theme.colors.gray[400]};
  & > span {
    font-size: 0.75rem;
    margin-left: 0.1rem;
  }
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
