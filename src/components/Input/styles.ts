import styled, { css } from 'styled-components';

import { StyledContainerProps } from './types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 8px;
`;

export const ContainerInput = styled.div<StyledContainerProps>`
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.input.background[1]};
  color: ${({ theme }) => theme.colors.input.text};
  border-radius: 0.625rem;
  border: 2px solid ${({ theme }) => theme.colors.input.background[1]};
  width: 100%;
  padding-left: 16px;
  padding-right: ${({ typePassword }) => (typePassword ? 0 : '16px')};
  transition: all 100ms;

  svg {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.input.icon};
  }

  svg:first-child {
    margin-right: 0.625rem;
  }

  & + div {
    margin-top: 0.5rem;
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

export const Input = styled.input`
  flex: 1;
  background: transparent;
  border: none;
  height: 100%;
  width: 100%;
  padding: 1rem 0;
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  display: block;
  font-size: 0.875rem;
  width: 90%;
  text-align: start;
  margin: 5px 0;
`;

export const HidePasswordButtonContainer = styled.div`
  width: 4rem;
  height: 100%;
  display: flex;
  background: ${({ theme }) => theme.colors.input.background[2]};
  align-items: center;
  justify-content: center;
  margin: 0 auto;
  border-radius: 0 10px 10px 0 !important;

  button {
    background: none;
    border: none;
    width: 100%;
    height: 100%;
    margin: 16px;

    svg {
      margin-right: 0 !important;
    }
  }
`;
