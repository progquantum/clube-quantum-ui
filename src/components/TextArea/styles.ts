import styled, { css } from 'styled-components';

import { Tooltip } from 'components/Tooltip';

import { StyledContainerProps } from './types';

export const Container = styled.div<StyledContainerProps>`
  position: relative;
  display: flex;
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.input.background[1]};
  color: ${({ theme }) => theme.colors.input.text};
  border-radius: 0.625rem;
  border: 2px solid ${({ theme }) => theme.colors.input.background[1]};
  width: 100%;
  padding: 1rem;
  transition: all 100ms;

  svg {
    font-size: 1.25rem;
    color: ${({ theme }) => theme.colors.input.icon};
  }

  svg:first-child {
    margin-right: 0.625rem;
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

export const Message = styled.textarea`
  flex: 1;
  background: transparent;
  border: none;
  height: 8rem;
  width: 100%;
  resize: none;
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
