import styled from 'styled-components';

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
