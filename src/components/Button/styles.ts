import styled, { css } from 'styled-components';

import { ButtonProps } from './types';

const variants = {
  primary: css`
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.mediumslateBlue};
    border: 0.1rem solid ${({ theme }) => theme.colors.mediumslateBlue};

    :hover {
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.colors.midnightBlue};
      border: 0.1rem solid ${({ theme }) => theme.colors.midnightBlue};
    }
  `,

  secondary: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.midnightBlue};
    border: 2px solid ${({ theme }) => theme.colors.midnightBlue};

    &:hover {
      background: ${({ theme }) => theme.colors.midnightBlue};
      color: ${({ theme }) => theme.colors.white};
      border: 0.1rem solid ${({ theme }) => theme.colors.midnightBlue};
    }
  `,
  secondary_degrade: css`
    color: ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.gradients.midnightBlueToMediumsLateBlue};

    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) => theme.gradients.royalblueToMidnightblue};
    }
  `,

  rounded: css`
    width: 3.125rem;
    height: 3.125rem;
    border-radius: 100%;
    padding: 0;
  `,
  disabled: css`
    color: ${({ theme }) => theme.colors.gray['700']};
    background: ${({ theme }) => theme.colors.gray['400']};

    &:hover {
      color: ${({ theme }) => theme.colors.gray['700']};
      background: ${({ theme }) => theme.colors.gray['400']};
    }
  `,
  transparent: css`
    background: transparent;
  `,

  danger: css`
    background: ${({ theme }) => theme.colors.danger};
    border: 2px solid ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.white};

    &:hover {
      background: ${({ theme }) => theme.colors.dangerDark};
      border: 2px solid ${({ theme }) => theme.colors.dangerDark};
      color: ${({ theme }) => theme.colors.white};
    }
  `,

  danger_outline: css`
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.danger};
    border: 2px solid ${({ theme }) => theme.colors.danger};

    &:hover {
      background-color: ${({ theme }) => theme.colors.danger};
      border: 2px solid ${({ theme }) => theme.colors.danger};
      color: ${({ theme }) => theme.colors.white};
    }
  `,

  degrade: css`
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.royalblue};
    border: 2px solid ${({ theme }) => theme.colors.royalblue};

    &:hover {
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) =>
        theme.gradients.midnightBlueToMediumsLateBlue};
      border: 2px solid
        ${({ theme }) => theme.gradients.midnightBlueToMediumsLateBlue};
    }

    &:active {
      color: ${({ theme }) => theme.colors.white};
      background: ${({ theme }) =>
        theme.gradients.midnightBlueToMediumsLateBlue};
      border: 2px solid
        ${({ theme }) => theme.gradients.midnightBlueToMediumsLateBlue};
    }
  `,

  link: css`
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.midnightBlue};

    &:hover {
      background: ${({ theme }) => theme.colors.white};
      color: ${({ theme }) => theme.colors.midnightBlue};
      text-decoration-line: underline;
    }
  `,
};

export const Container = styled.button<ButtonProps>`
  ${({ theme, variant, color, background }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${background || theme.gradients.midnightBlueToMediumsLateBlue};
    border: 0;
    border-radius: 10px;
    height: 56px;
    width: 100%;
    padding: 0 16px;
    margin-top: 16px;
    color: ${color || theme.colors.white};

    &:hover {
      background: ${({ theme }) => theme.colors.mediumslateBlue};
      color: ${({ theme }) => theme.colors.white};
    }

    &:disabled {
      cursor: not-allowed;
    }

    ${variant && variants[variant]};
  `}
`;
