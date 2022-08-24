import styled from 'styled-components'

import { Button } from 'components/Button'

export const Form = styled.form`
  width: 100%;
  height: 100%;
  max-width: 27.0625rem;
  max-height: 31.7437rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: .75rem;
  background: ${({ theme }) => theme.colors.white};
`
export const Plan = styled.div`
  width: 100%;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 1rem;
  padding-bottom: 1rem;
`
export const CardDataContainer = styled.div`
  display: flex;
  width: 100%;
  align-items: center;
  justify-content: space-between;
  gap: 16px;

`
export const Title = styled.p`
  display: flex;
  gap: .625rem;
  font-weight: 700;
  font-size: 1rem;
  line-height: 1.25rem;
`
export const TitlePlan = styled.h2`
  font-weight: 900;
  font-size: 1.25rem;
  padding-bottom: 16px;
  border-bottom: 1px solid ${({ theme }) => theme.colors.gray[700]};
`

export const CardDataTitle = styled.p`
  font-weight: 700;
  font-size: 1.125rem;
`
export const CardDataText = styled.p`
  font-weight: 500;
  font-size: 1.125rem;
  line-height: 1.375rem;
`
export const ButtonConfirm = styled(Button)`
  width: 100%;
  height: 44px;

`
