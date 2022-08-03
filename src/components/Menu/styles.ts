import styled from 'styled-components'

import { Button } from 'components/Button'

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
  @media (max-width: 414px){
    display: none;
  }
`

export const ItemContainer = styled.div`
  cursor: pointer;
  display: flex;
  height: 5rem;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[100]};
  width: 15.625rem;

`

export const Content = styled.div`
  display: flex;
  gap: 1.151rem;
  margin: 1.875rem 0;
  margin-left: 0.964rem;
`

export const DivImage = styled.div`
  width: 1.563rem;
  display: flex;
  justify-content: center;
  align-items: center;

`

export const Text = styled.p`
  font-weight: 500;
  font-size: 1rem;

`
export const DangerButton = styled(Button)`
  justify-content: space-between;
  width: 14.563rem;
  height: 3.125rem;
  border-radius: 0.625rem;
  margin: 1.5rem 0;
  background: ${({ theme }) => theme.colors.danger};
  `
