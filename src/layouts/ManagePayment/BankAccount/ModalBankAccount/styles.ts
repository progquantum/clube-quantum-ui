import styled from 'styled-components'

import { Button } from 'components/Button'

export const Container = styled.div`
    width: 100%;
    height: 100vh;
    background: rgba(0, 0, 0, 0.8);
    z-index: 10;
    position: fixed;
    top: 0;
    right: 0;
    -webkit-overflow-scrolling: hidden;
    display: flex;
    align-items: center;
    justify-content: center;
`

export const ModalBox = styled.div`
    width: 21rem;
    background-color: ${({ theme }) => theme.colors.white};
    border-radius: .9rem;
    box-shadow: 0px 0px 20px rgba(0, 0, 0, 0.1);
    padding: 1.25rem 1.5rem;
    position: absolute;
    left: 0;
    right: 0;
    top: 12%;
    margin: 0 auto;
    z-index: 1000;
`
export const ContentTitle = styled.h2`
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.gray[400]};
    font-weight: 500;
    line-height: 1.25rem;
`

export const YourAccount = styled.div`
    display: flex;
    align-items: center;
    gap: 0.625rem;
    margin-bottom: 1.5rem;
`

export const BankingData = styled.div`
    display: flex;
    justify-content: space-between;
`

export const BankingAccount = styled.div`
    display: flex;
    flex-direction: column;
    gap: .9rem;

`

export const TitleContent = styled.strong`
   color: ${({ theme }) => theme.colors.gray[700]};
`

export const TextContent = styled.p`
    color: ${({ theme }) => theme.colors.gray[700]};
    font-weight: 900;
`
export const BankingAccountForm = styled.form`
    display:flex;
    flex-direction: column;
`

export const InfoText = styled.p`
    margin: 1.5rem 0;
    color: ${({ theme }) => theme.colors.gray[700]};
`

export const ButtonContinue = styled(Button)`
      width: 100%;
      border: 2px solid transparent;
`

export const ButtonCancel = styled(Button)`
    width: 100%;
    background-color: transparent;
    border: 2px solid ${({ theme }) => theme.colors.danger};
    color: ${({ theme }) => theme.colors.danger};
    margin-top: 1rem;
`

export const YourConfirmAccount = styled.div`
    display: flex;
    align-items: center;
    gap: 0.625rem;
    margin-bottom: 1.5rem;
`

export const ContentConfirmAccount = styled.h2`
    font-size: 0.75rem;
    color: ${({ theme }) => theme.colors.gray[700]};
    font-weight: 700;
    line-height: 1.25rem;
`

export const BankingConfirmAccount = styled.div`
    display: flex;
    justify-content: space-between;
`
export const BankingConfirmData = styled.div`
    display: flex;
    flex-direction: column;
    gap: 1.5rem;
    margin-bottom: 1.5rem;
`
export const TextConfirmAccount = styled.p`
    color: ${({ theme }) => theme.colors.gray[700]};
    font-weight: 500;
`
