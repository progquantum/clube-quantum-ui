import styled, { css } from 'styled-components';

import { Props } from './types';

const containerThemes = {
  darkBlue: css`
    background: ${({ theme }) => theme.gradients.royalblueToMidnightblue};
  `,
};

export const Container = styled.div<Props>`
  display: flex;
  align-items: center;
  justify-content: center;
  width: ${({ height }) => height || '150px'};
  height: ${({ height }) => height || '150px'};
  text-align: center;
  box-shadow: 0px 1px 4px rgba(0, 0, 0, 0.09);
  cursor: pointer;
  position: relative;
  border-radius: 25px;
  display: flex;
  flex-direction: column;
  gap: 15px;

  ${({ isDisabled }) =>
    isDisabled &&
    css`
      opacity: 0.6;
      cursor: not-allowed;
    `}

  ${({ definedTheme }) => definedTheme && containerThemes[definedTheme]}
`;

export const InnerText = styled.h6``;
