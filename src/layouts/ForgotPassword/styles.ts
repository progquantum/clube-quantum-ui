import styled from 'styled-components'

import { Button } from 'components/Button'

export const Container = styled.section`
  width:100%;
  height: 100vh;
  display: flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
`

export const Box = styled.div`
  width: 725.6px;
  height: 305px;
  display: flex;
  flex-direction: row;
  gap: 40px;

  /* Mobile devices */
  @media (max-width: 767px) {
    flex-direction: column;
    align-items: center;
  }

`

export const Form = styled.form`
  width: 300px;
  height: 305px;
  display: flex;
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.15);
  border-radius: 20px;
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  padding: 60px 24px;
  gap: 24px;
  flex: none;
  order: 0;
  flex-grow: 0;

  h1 {
    padding-right: 83px;
    font-weight: 700;
    font-size: 16px;
    line-height: 20px;
    color: ${({ theme }) => theme.colors.gray[700]};
    align-items: baseline;
  }
`

// export const InputForm = styled(Input)``

export const FormBtn = styled(Button)`
  width: 115px;
  height: 44px;
  background-color: ${({ theme }) => theme.colors.midnightBlue};
  color: ${({ theme }) => theme.colors.light};
  font-style: normal;
  font-weight: 900;
  font-size: 12px;
  line-height: 15px;
  padding: 16px 30px;
`
