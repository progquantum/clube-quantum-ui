import styled from 'styled-components'

import { Button } from 'components/Button'

export const Container = styled.section`
  width:100%;
  height: 100vh;
  display: flex;
  justify-content: center;
  align-items: center;
  gap: 2.5rem;
`

export const Form = styled.form`
  width: 322px;
  height: 302px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  gap: 0.5rem;
  padding: 0 2.1875rem;

  h1 {
    font-size: 16px;
    font-weight: 700;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.gray[700]};
    align-items: center;
  }
`

export const FormBtn = styled(Button)`
  width: 100%;
  height: 44px;
`
