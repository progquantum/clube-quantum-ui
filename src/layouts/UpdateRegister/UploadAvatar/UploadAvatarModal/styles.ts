import styled from 'styled-components'

import { Button } from 'components/Button'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .9rem;
  margin: 0 auto;
  max-width: 22rem;

  h1 {
    font-size: 1.125rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.gray[400]};
    margin-bottom: 2rem;
  }
`

export const UploadButton = styled(Button)`
  width: 100%;
  margin-top: 2rem;
  border: 2px solid transparent;

  &:hover {
  background: ${({ theme }) => theme.colors.mediumslateBlue};
  }
`

export const CancelButton = styled(Button)`
  width: 100%;
  background: transparent;
  border: 2px solid ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.danger};

  &:hover {
    color:  ${({ theme }) => theme.colors.white};
    background: ${({ theme }) => theme.colors.danger};
  }
`
