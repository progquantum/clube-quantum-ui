import styled from 'styled-components'

export const Content = styled.div`
  box-shadow: 0px 0px 20px 0px #0000001A;
  width: 21.844rem;
  height: 13.625rem;
  padding: 1.25rem 1.5rem;
  display: flex;
  flex-direction: column;
  gap: 1.5rem;
  border-radius: .9rem;

  @media (max-width: 1024px){
    width: 26.688rem;
  }

  @media (max-width: 460px){
    width: 20.665rem;
  }

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
`

export const CardDetails = styled.div`
  display: flex;
  justify-content: space-between;
`

export const CardNumber = styled.div`
  display: flex;
  flex-direction: column;
  gap: 1rem;
  color: ${({ theme }) => theme.colors.gray[400]};
  margin: .5rem 0;
`

export const LastDigits = styled.strong`
  color: ${({ theme }) => theme.colors.gray[700]};
`

export const TextContent = styled.p`
  color: ${({ theme }) => theme.colors.gray[400]};
  font-weight: 500;
  font-size: 1rem;
  line-height: 20px;
`
