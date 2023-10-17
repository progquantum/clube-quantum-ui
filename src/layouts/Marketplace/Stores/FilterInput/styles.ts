import styled, { css } from 'styled-components';

import { InputProps, StyledContainerProps } from './types';

export const ContainerInput = styled.div<StyledContainerProps>`
  display: flex;
  color: ${({ theme }) => theme.colors.input.text};
  border: 2px solid ${({ theme }) => theme.colors.input.background[1]};
  border-radius: 50px;
  width: 30rem;
  height: 100%;

  @media (max-width: 920px) {
    width: 100%;
  }
  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border: 2px solid ${theme.colors.midnightBlue};
    `}

  ${({ isFilled, theme }) =>
    isFilled &&
    css`
      svg {
        color: ${theme.colors.midnightBlue};
      }
    `}

  ${({ hasError, theme }) =>
    hasError &&
    css`
      border: 2px solid ${theme.colors.input.danger};

      svg {
        color: ${theme.colors.input.danger};
      }
    `}
`;

export const Input = styled.input<InputProps>`
  background: transparent;
  border: none;
  padding: 0.8rem 2rem;
  width: 100%;
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  display: block;
  font-size: 0.875rem;
  width: 90%;
  text-align: start;
  margin: 5px 0;
`;

export const Button = styled.button`
  all: unset;
  cursor: pointer;
  background-color: ${({ theme }) => theme.colors.mediumslateBlue};
  border-radius: 0px 50px 50px 50px;
  padding: 0.5rem 2.5rem;
`;
