import styled from 'styled-components';

export const Form = styled.form`
  display: flex;
  flex-direction: column;
  width: 100%;
  max-width: 22.25rem;
  gap: 20px;
`;

export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 0.9375rem;
`;
export const BankDataTitle = styled.h3`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
`;

export const BankData = styled.h3`
  font-weight: 900;
  font-size: 16px;
  line-height: 20px;
`;

export const BankInfo = styled.p`
  margin-top: 10px;
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const Container = styled.form`
  padding: 1.5rem;
  display: flex;
  gap: 10px;
  flex-direction: column;
  align-items: flex-start;
  justify-content: flex-start;
  margin: 10px 0 !important;
`;

export const BankingData = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BankingAccount = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

export const TitleContent = styled.strong`
  text-align: start;
  color: ${({ theme }) => theme.colors.gray[700]};
  font-size: 0.9rem;

  @media (max-width: 460px) {
    font-size: 0.8rem;
  }
`;

export const TextContent = styled.p`
  text-align: start;
  color: ${({ theme }) => theme.colors.gray[400]};
  font-weight: 500;
  font-size: 0.9rem;

  @media (max-width: 460px) {
    font-size: 0.8rem;
  }
`;

export const BankingOwner = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

export const TitleApp = styled.strong`
  color: ${({ theme }) => theme.colors.blue};
  font-size: 0.9rem;
  font-weight: 700;

  @media (max-width: 460px) {
    font-size: 0.8rem;
  }
`;

export const Links = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  gap: 10px;

  a {
    @media (max-width: 460px) {
      font-size: 0.7rem;
    }
  }
`;
