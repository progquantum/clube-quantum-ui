import styled from 'styled-components'

import { Button } from 'components/Button'

export const Container = styled.div`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: .9375rem;
  width: 26.6875rem;
  height: 39.5rem;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  align-items: flex-start;
  padding: 2.5rem 1.875rem;

`
export const Line = styled.span`
  display: flex;
  gap: .625rem;
  font-weight: 500;
  font-size: .625rem;
  line-height: 1.25rem;
  color: ${({ theme }) => theme.colors.gray[400]};
`

export const Text = styled.p`
  font-weight: 500;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.gray[400]};
`
export const Content = styled.div`
  display: flex;
  justify-content: space-between;
  align-items: center;
  width: 100%;
`
export const Title = styled.p`
  font-weight: 700;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.gray[700]};
`
export const Data = styled.p`
  font-weight: 900;
  font-size: 16px;
  line-height: 20px;
  color: ${({ theme }) => theme.colors.gray[700]};
`
export const Description = styled.p`
`
export const ConfirmButton = styled(Button)`
`
export const ReturnButton = styled(Button)`
`
