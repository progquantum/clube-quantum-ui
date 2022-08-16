import styled from 'styled-components'

import { Button } from 'components/Button'

export const Container = styled.header`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 10rem;

  a {
    font-weight: 600;
    line-height: 1.3rem;
    color: ${({ theme }) => theme.colors.gray[700]};
  }
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3rem;
`

export const LoginButton = styled(Button)`
  background: linear-gradient(267.68deg, #001F80 -86.29%, #0C61FF 106.13%);
  padding: 0.625rem 1.813rem;
  font-weight: 500;
`
