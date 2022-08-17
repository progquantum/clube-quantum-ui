import styled, { css } from 'styled-components'

import { ButtonProps } from './types'

const variants = {
  secondary: css`
    background: transparent;
    color: ${({ theme }) => theme.colors.midnightBlue};
    border: 0.1rem solid ${({ theme }) => theme.colors.midnightBlue};

    :hover {
      background: ${({ theme }) => theme.colors.midnightBlue};
      color: ${({ theme }) => theme.colors.white};
    }
  `,

  rounded: css`
    width: 3.125rem;
    height: 3.125rem;
    border-radius: 100%;
    padding: 0;
  `,

  transparent: css`
    background: transparent;
  `,

  danger: css`
    background: ${({ theme }) => theme.colors.white};
    color: ${({ theme }) => theme.colors.danger};
    border: 1px solid ${({ theme }) => theme.colors.danger};
   
    :hover {
      background-color: ${({ theme }) => theme.colors.danger} ;
      border: 1px solid ${({ theme }) => theme.colors.danger};
      color: ${({ theme }) => theme.colors.white};
    }
  `
}

export const Container = styled.button<ButtonProps>`
  ${({ theme, variant, color, background }) => css`
    display: flex;
    justify-content: center;
    align-items: center;
    background: ${background || theme.colors.midnightBlue};
    border: 0;
    padding: 0.5rem 1.5rem;
    border-radius: 2.5rem;
    color: ${color || theme.colors.white};
    transition: ${theme.transitions.default};

    * {
      transition: ${theme.transitions.default};
    }


    ${variant && variants[variant]};
  `}
`
