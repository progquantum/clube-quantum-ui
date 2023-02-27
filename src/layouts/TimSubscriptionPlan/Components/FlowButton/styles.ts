import styled, { css } from 'styled-components';

import { ButtonProps } from './types';

const variants = {
  primary: css`
    background-color: ${({ theme }) => theme.colors.midnightBlue};
    border: 2px solid ${({ theme }) => theme.colors.midnightBlue};
    color: ${({ theme }) => theme.colors.white};
    &:hover {
      color: ${({ theme }) => theme.colors.midnightBlue};
      background-color: transparent;
    }
  `,
  primary_outline: css`
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.midnightBlue};
    color: ${({ theme }) => theme.colors.midnightBlue};
    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background-color: ${({ theme }) => theme.colors.midnightBlue};
    }
  `,
  secondary: css`
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.danger};

    &:hover {
      background-color: ${({ theme }) => theme.colors.danger};
      color: ${({ theme }) => theme.colors.white};
    }
  `,
  disabled: css`
    background-color: ${({ theme }) => theme.colors.gray[100]};
    border: 2px solid ${({ theme }) => theme.colors.gray[100]};
    color: ${({ theme }) => theme.colors.gray[400]};
    cursor: not-allowed;
    pointer-events: none;
  `,
};

export const Button = styled.button<ButtonProps>`
  width: max-content;
  padding: 0.5rem 4rem;
  border-radius: 0.5rem;
  transition: all 0.1s ease;
  margin-bottom: 2rem;
  ${({ variant }) => variant && variants[variant]}

  @media (max-width: 420px) {
    width: 100%;
  }
`;
