import styled, { css } from 'styled-components';

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
  border: 2px solid ${({ theme }) => theme.colors.gray[700]};
  width: 100%;
  height: 59px;
  transition: all 100ms;

  ${({ isFocused, theme }) =>
    isFocused &&
    css`
      border: 2px solid ${theme.colors.mediumslateBlue};
    `}
  ${({ isFilled, theme }) =>
    isFilled &&
    css`
      border: 2px solid ${theme.colors.mediumslateBlue};
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
  margin-bottom: 5px;
`;

export const SelectStyle = styled.select`
  flex: 1;
  background: transparent;
  border: none;
  height: 100%;
  width: 100%;
  outline: none;
  color: ${({ theme }) => theme.colors.gray[400]};
  margin-top: 0.3125rem;
  padding-left: 20px;
  -webkit-appearance: none;
  -moz-appearance: none;
  -ms-appearance: none;
  appearance: none;
  text-indent: 1px;
  text-overflow: '';

  &:target {
    background-color: ${({ theme }) => theme.colors.success};
  }
`;

export const Option = styled.option`
  width: 100%;
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
