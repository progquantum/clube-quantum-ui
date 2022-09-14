import styled from 'styled-components'

import { Button } from 'components/Button'

export const Main = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 120px auto;
  width: 100%;
  gap: 120px;

  @media (max-width: 1024px){
    gap: 60px;
  }
`
export const Form = styled.form`
  background: ${({ theme }) => theme.colors.white};
  box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
  border-radius: .9375rem;
  width: 26.6875rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  gap: 20px;
  align-items: flex-start;
  padding: 2.5rem 1.875rem;
  @media (max-width: 460px){
    width: 20.625rem;
  }
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
export const DivInput = styled.div`
  display: flex;
  flex-direction: column;
  width: 100%;
  gap: 5px;
  > div {
    margin: 0;
    display: flex;
    justify-content: flex-end;
  }
`
export const CVC = styled(DivInput)`
  width: 41.15%;
  @media (max-width: 460px){
    width: 60%;
  }
`
export const Description = styled.p`
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.black};
  display: flex;
  align-items: center;
`
export const ConfirmButton = styled(Button)`
  width: 100%;
  padding: 10px 29px;
`
export const ReturnButton = styled(Button)`
  width: 100%;
`
export const ContentCardNumber = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 24px;
`
export const ContentCardExpirateCVC = styled(ContentCardNumber)`
`
export const Cancel = styled.a`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  text-align: center;
  color: ${({ theme }) => theme.colors.danger};
`
