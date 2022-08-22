import styled from 'styled-components'

import { Button } from 'components/Button'

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
  font-size: 1.125rem;
  font-weight: 500;
  text-align: center;
  margin-bottom: 1.5rem;
`
export const Line = styled.div`
  width: 100%;
  margin-bottom: 1.5rem;
  border-bottom: 3px solid ${({ theme }) => theme.colors.gray[100]};
`

export const Button_ = styled(Button)`
  width: 100%;
  margin-bottom: 24px;
  @media (max-width: 374px){
    width: 90%;
  }
`
