import styled from 'styled-components'

import { TextTitleProps } from './types'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  justify-content: center;
  margin-top: 4.0231rem;
  gap: 3.75rem;
`
export const LeftWrapper = styled.div`
  @media (max-width: 820px){
    display: none;
  }
`

export const Content = styled.div`
  max-width: 20.625rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.gray[700]};
  display: flex;
  flex-direction: column;
  align-items: center;
`

export const TextTitle = styled.h3<TextTitleProps>`
  font-size: 1.25rem;
  font-weight: ${(props) => props.fontWeight};
  margin: ${(props) => props.margin || 0};
`

export const Paragraph = styled.p`
  font-size: 1.25rem;
  text-align: center;
  margin-bottom: 2.5rem;
`

export const Button = styled.button`
  padding: 1rem 1.875rem;
  margin-top: 2rem;
  border-radius: 5rem;
  background-color: ${({ theme }) => theme.colors.midnightBlue};
  color: ${({ theme }) => theme.colors.white};
  font-size: 0.75rem;
  font-weight: 900;
`
