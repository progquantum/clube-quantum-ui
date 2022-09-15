import styled from 'styled-components'

import { Button } from 'components/Button'

export const Container = styled.div`
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: .5rem;
  height: max-content;
  display: flex;
  flex-direction: column;
  gap: 2rem;
  padding: 1.25rem 1.5rem;
`

export const ResetPassword = styled.div`
  display: flex;
  align-items: center;
  gap: .625rem;

  p {
    font-weight: 500;
    font-size: .7rem;
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`

export const ForgotPassword = styled.a`
  display: flex;
  justify-content: center;
  font-size: .875rem;
  line-height: 1.6;
  color: ${({ theme }) => theme.colors.midnightBlue};
`

export const ChangePassword = styled(Button)`
  width: 100%;
  margin-top: 1.5rem;
  font-size: .875rem;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mediumslateBlue};
  }
`
