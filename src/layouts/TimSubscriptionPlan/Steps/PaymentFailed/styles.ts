import styled from 'styled-components';

export const PaymentFailedContainer = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  align-items: center;
  margin: 5rem 0;
`;

export const Title = styled.span`
  font-size: 1rem;
  font-weight: 500;
  width: 50%;
  color: ${({ theme }) => theme.colors.gray[700]};
  text-align: center;
`;
