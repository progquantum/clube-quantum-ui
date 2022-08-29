import styled from 'styled-components'

import { Button } from 'components/Button'

export const Container = styled.header`
  width: 100%;
  max-width: 72.125rem;
  margin: 0 auto;
  display: flex;
  align-items: center;
  justify-content: space-between;
  padding: 1rem 4rem;


  a {
    font-weight: 600;
    line-height: 1.3rem;
    color: ${({ theme }) => theme.colors.gray[700]};
  }
`

export const Shadow = styled.div`
  box-shadow: 0px 2px 20px rgba(0, 0, 0, 0.07);
`

export const Nav = styled.nav`
  display: flex;
  align-items: center;
  gap: 3rem;
`

export const LoginButton = styled(Button)`
  background: ${({ theme }) => theme.gradients.midnightBlueToMediumsLateBlue};
  padding: 0.625rem 1.813rem;
  font-weight: 500;

  :hover {
    background: ${({ theme }) => theme.colors.mediumslateBlue};
  }
`
