import styled, { css } from 'styled-components';

import { StyledContainerProps } from './types';

export const Container = styled.div<StyledContainerProps>`
  position: relative;
  display: flex;
  align-items: flex-start;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.input.text};
  border-radius: 0.625rem;
  border: 2px solid ${({ theme }) => theme.colors.gray[700]};
  width: 100%;
  padding: 1rem;
  transition: all 100ms;
  margin-top: 5px;

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
      border: 2px solid ${theme.colors.mediumslateBlue};
    `}

  ${({ isFilled, theme }) =>
    isFilled &&
    css`
      svg {
        color: ${theme.colors.mediumslateBlue};
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
  font-size: 12px;
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  display: block;
  font-size: 0.875rem;
  width: 90%;
  text-align: start;
  margin: 5px 0;
`;

export const Label = styled.label`
  color: ${({ theme }) => theme.colors.gray[700]};
  font-weight: 600;
  font-size: 14px;
  line-height: 150%;
  width: 100%;
  display: flex;
  justify-content: flex-start !important;
  align-items: center;
`;
