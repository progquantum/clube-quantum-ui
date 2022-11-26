import styled from 'styled-components';

export const Container = styled.div`
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: 0.5rem;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.25rem 1.5rem;
  width: 22rem;

  @media (max-width: 380px) {
    width: 19rem;
  }
`;

export const ResetPassword = styled.div`
  display: flex;
  align-items: center;
  gap: 0.625rem;

  p {
    font-weight: 500;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  > svg {
    color: ${({ theme }) => theme.colors.gray[300]};
  }
`;

export const ForgotPassword = styled.a`
  display: flex;
  justify-content: center;
  font-size: 0.875rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.gray[400]};
  margin: 0.8rem 0;

  &:hover {
    color: ${({ theme }) => theme.colors.midnightBlue};
  }
`;
