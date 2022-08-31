import styled, { css } from 'styled-components'

import { Button } from 'components/Button'

import { NavButtonProps } from './types'

export const Container = styled.nav`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 18.563rem;
  height: 46.125rem;
  background-color: ${({ theme }) => theme.colors.background};
  box-shadow: 0 0 1.875rem rgba(0, 0, 0, 0.08);
  border-radius: 0.625rem;

  @media (max-width: 820px){
    display: none;
  }
`

export const NavButton = styled.button<NavButtonProps>`
  display: flex;
  align-items: center;
  gap: 1.151rem;
  background: none;
  border: none;
  height: 5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  width: 15.625rem;
  font-size: 1rem;

  &:disabled {
    opacity: 0.6;
    cursor: not-allowed;
  }

  ${(props) => props.activePath &&
    css`
      background: ${({ theme }) => theme.colors.ghostwhite};;
      color: ${({ theme }) => theme.colors.gray[700]};
      width: 100%;
      padding: 0 1.46rem;
      border: none;
    `
  }
`

export const WrapImage = styled.div`
  width: 25.008px;
  display: flex;
  justify-content: center;
  align-items: center;
`

export const SignOutButton = styled(Button)`
  justify-content: space-between;
  width: 14.563rem;
  height: 3.125rem;
  border-radius: 0.625rem;
  margin: 1.5rem 0;
  background: ${({ theme }) => theme.colors.danger};
`
