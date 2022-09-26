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
  margin-bottom: 1rem;
`;

export const CreditCardForm = styled.form`
  display: flex;
  flex-direction: column;
`;

export const ButtonConfirm = styled(Button)`
  width: 100%;
  border: 2px solid transparent;

  :hover {
    background-color: ${({ theme }) => theme.colors.mediumslateBlue};
  }
`;

export const ButtonCancel = styled(Button)`
  width: 100%;
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.danger};
  margin-top: 1rem;

  :hover {
    color: ${({ theme }) => theme.colors.white};
    background-color: ${({ theme }) => theme.colors.danger};
  }
`;
