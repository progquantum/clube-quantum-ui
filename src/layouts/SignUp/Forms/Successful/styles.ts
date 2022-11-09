import styled from 'styled-components';

export const Container = styled.form`
  margin-top: 20px !important;
  text-align: center;
`;

export const Account = styled.a`
  display: flex;
  align-items: center;
  gap: 0.875rem;
  margin-top: 0.875rem;
  color: ${({ theme }) => theme.colors.midnightBlue};
`;
