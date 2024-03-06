import styled from 'styled-components';

export const EarningsHistoryContainer = styled.div`
  box-shadow: 0 0 1.3rem rgba(0, 0, 0, 0.1);
  border-radius: 0.8rem;
  padding: 1.5rem;
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 100%;
`;
export const EarningsHistoryByIndication = styled(EarningsHistoryContainer)`
  grid-area: ByIndication;
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
  width: 100%;
`;

export const PartnerRow = styled.div`
  display: flex;
  gap: 1rem;
  align-items: center;
  margin: 1.5rem 0;

  & div:nth-child(2) {
    margin-right: auto;
  }
`;

export const PartnerColumn = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
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

export const EarningDate = styled.h1`
  font-size: 0.8rem;
  color: ${({ theme }) => theme.colors.gray[400]};
`;

export const QuantityGainedText = styled.span`
  display: inline-block;
  color: ${({ theme }) => theme.colors.successLight};
  align-self: flex-end;
  margin-right: 1rem;
  text-align: right;
  width: 100%;
  max-width: 100px;
`;

export const PaginationContainer = styled.div`
  display: flex;
  justify-content: space-around;
  align-items: center;
  gap: 0.5rem;
  height: max-content;
  margin-top: auto;
`;
