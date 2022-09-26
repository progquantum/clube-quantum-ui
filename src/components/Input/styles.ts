import styled, { css } from 'styled-components';

import { Tooltip } from 'components/Tooltip';

import { StyledContainerProps } from './types';

export const Container = styled.div<StyledContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.input.background[1]};
  color: ${({ theme }) => theme.colors.input.text};
  border-radius: 0.625rem;
  border: 2px solid ${({ theme }) => theme.colors.input.background[1]};
  width: 100%;
  padding: 0 16px;
  transition: all 100ms;

  svg {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.gray[400]};
  }

  svg:first-child {
    margin-right: 0.625rem;
  }

  & + div {
    margin-top: 0.5rem;
  }

  ${({ isFilled, theme }) =>
    isFilled &&
    css`
      border: 2px solid ${theme.colors.midnightBlue};

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

export const Error = styled(Tooltip)`
  height: 100%;

  span {
    background: ${({ theme }) => theme.colors.danger};
    font-size: 0.875rem;

    &:before {
      border-color: ${({ theme }) => theme.colors.danger};
    }
  }
`;
