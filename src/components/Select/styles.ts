import styled, { css } from 'styled-components';
import Select from 'react-select';

import { StyledContainerProps } from './types';

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 100%;
  margin-top: 0.9375rem;
`;
export const SelectContainer = styled.div<StyledContainerProps>`
  position: relative;
  display: flex;
  align-items: center;
  background: ${({ theme }) => theme.colors.white};
  color: ${({ theme }) => theme.colors.input.text};
  border-radius: 0.625rem;
  border: 2px solid ${({ theme }) => theme.colors.input.background[1]};
  width: 100%;
  transition: all 100ms;

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border: 2px solid ${theme.colors.midnightBlue};
    `}
  ${({ isFilled, theme }) =>
    isFilled &&
    css`
      border: 2px solid ${theme.colors.midnightBlue};
    `}
  ${({ hasError, theme }) =>
    hasError &&
    css`
      border: 2px solid ${theme.colors.input.danger};
    `}
`;
export const Label = styled.label`
  color: ${({ theme }) => theme.colors.gray[700]};
  font-weight: 700;
  line-height: 150%;
  width: 100%;
  display: flex;
  justify-content: flex-start !important;
  align-items: center;
`;

export const SelectStyle = styled(Select)`
  flex: 1;
  background: transparent;
  border: none;
  height: 100%;
  width: 100%;
  max-height: 424px;
  outline: none;
  color: ${({ theme }) => theme.colors.gray[400]};
  margin-top: 0.3125rem;

  &:target {
    background-color: ${({ theme }) => theme.colors.success};
  }

  :after {
    content: '';
    width: 0.8em;
    height: 0.5em;
    background-color: var(--select-arrow);
    clip-path: polygon(100% 0%, 0 0%, 50% 100%);
  }
`;

export const Option = styled.option`
  width: 424px !important;
  background-color: transparent;
  border-radius: 0.625rem;
  color: ${({ theme }) => theme.colors.gray[400]};
  min-height: 5rem !important;

  > li:hover {
    background: ${({ theme }) => theme.colors.success};
  }
`;

export const Error = styled.span`
  color: ${({ theme }) => theme.colors.danger};
  display: block;
  font-size: ${({ theme }) => theme.fontSizes.sm};
  font-weight: 900;
  width: 100%;
  text-align: start;
  margin: 0.3125rem 0;
`;
