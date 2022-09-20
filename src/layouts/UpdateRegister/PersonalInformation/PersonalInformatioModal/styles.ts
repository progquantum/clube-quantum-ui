import styled from 'styled-components'

import { Button } from 'components/Button'

export const UserInformation = styled.div`
  display: flex;
  flex-direction: column;
`

export const TextContent = styled.div`
  display: flex;
  align-items: center;
  gap: .625rem;

 & p {
    font-size: .7rem;
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`

export const PersonalInformationForm = styled.form`
  display: flex;
  flex-direction: column;
`

export const ButtonConfirm = styled(Button)`
  margin-top: 3.125rem;
  margin-bottom: 1rem;
  border: 2px solid transparent;

  &:hover {
    background-color: ${({ theme }) => theme.colors.mediumslateBlue};
  }
`

export const ButtonCancel = styled(Button)`
  background-color: transparent;
  border: 2px solid ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.danger};

  &:hover {
    background-color: ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.white};
  }
`
