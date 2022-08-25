import styled from 'styled-components'

import { Input } from 'components/Input'
import { Button } from 'components/Button'

export const CVCform = styled.form`
  width: 100%;
  max-width: 27.0625rem;
  display: flex;
  flex-direction: column;
  gap: 1.25rem;
  background: ${({ theme }) => theme.colors.white};
`
export const Title = styled.p`
  display: flex;
  gap: .625rem;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25rem;
`
export const Text = styled.p`
  font-size: 1rem;
  line-height: 1.25rem;
`
export const CardDataContainer = styled.div`
  display: flex;
  width: 100%;
  flex-direction: row;
  align-items: center;
  justify-content: space-between;
`
export const CardDataTitle = styled.p`
  font-weight: 700;
  font-size: 1.125rem;
`
export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 225px;
  > div {
    margin: 0;
    display: flex;
    justify-content: flex-end;
  }
`
export const InputCVC = styled(Input)`
  display: flex;
  border: 2px solid ${({ theme }) => theme.colors.gray[700]};
  border-radius: .625rem;
  width: 100px;
  height: 3.4375rem;

  ::placeholder {
    color: ${({ theme }) => theme.colors.gray[400]};
}
`
export const CardData = styled.p`
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.375rem;
`
export const ButtonCVC = styled(Button)`
  height: 44px;

`
