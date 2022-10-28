import styled from 'styled-components';

import { Button } from 'components/Button';

export const ContentTitle = styled.h2`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.gray[400]};
  font-weight: 500;
  line-height: 1.25rem;
`;

export const YourAccount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 1.5rem;
  margin-top: 0.5rem;

  > svg {
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`;

export const BankingData = styled.div`
  display: flex;
  justify-content: space-between;
  margin-bottom: 1.5rem;
`;

export const BankingAccount = styled.div`
  display: flex;
  flex-direction: column;
  gap: 0.9rem;
`;

export const TitleContent = styled.strong`
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const TextContent = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
  font-weight: 900;
`;

export const BankingAccountForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const InfoText = styled.p`
  margin: 1.5rem 0;
  color: ${({ theme }) => theme.colors.gray[700]};
`;

export const ButtonContinue = styled(Button)`
  width: 100%;
  border: 2px solid transparent;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mediumslateBlue};
  }
`;

export const YourConfirmAccount = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;
  margin-bottom: 1.5rem;
`;

export const ContentConfirmAccount = styled.h2`
  font-size: 0.75rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  font-weight: 700;
  line-height: 1.25rem;
`;

export const BankingConfirmAccount = styled.div`
  display: flex;
  justify-content: space-between;
`;

export const BankingConfirmData = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  margin-bottom: 1.5rem;
`;

export const TextConfirmAccount = styled.p`
  color: ${({ theme }) => theme.colors.gray[700]};
  font-weight: 500;
`;
