import styled from 'styled-components'

import { Button } from 'components/Button'

export const Container = styled.div`
  display: flex;
  margin: 90px auto;
  justify-content: center;
  align-items: center;
  flex-wrap: wrap;
  gap: 3.75rem;
  width: 100%;
  height: 100%;
  padding: 0 2rem;

  @media (max-width: 845px){
   gap: 2.5rem;
  }
`
export const LeftWrapper = styled.div`
  width: 100%;
  max-width: 24.1rem;
  height: 100%;
  display: flex;
  flex-direction: column;
  justify-content: center;
  gap: 5.625rem;

  @media (max-width: 845px){
    height: 1.25rem;
  }
`
export const ImageContainer = styled.div`
  @media (max-width: 890px){
    display: none;
  }
`

export const Heading = styled.h1`
  font-weight: 700;
  font-size: 1.25rem;
  line-height: 1.5rem;
  color: ${({ theme }) => theme.colors.gray[700]};
`

export const Form = styled.form`
  width: 100%;
  max-width: 24.1rem;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
`
export const Label = styled.label`
  font-weight: 600;
  font-size: 1.125rem;
  line-height: 1.375rem;
  color: ${({ theme }) => theme.colors.gray[700]};
  margin-top: 2.5rem;
  margin-bottom: .3125rem;
`
export const Message = styled.textarea`
  width: 100%;
  min-height: 9.375rem;
  resize: none;
  display: flex;
  flex-direction: row;
  align-items: flex-start;
  padding: .625rem 1.25rem;
  gap: .625rem;
  border: 2px solid ${({ theme }) => theme.colors.gray[700]};
  border-radius: .625rem;

  &::placeholder{
    font-weight: 500;
    font-size: .75rem;
    line-height: .9375rem;
  }
`
export const ButtonSubmit = styled(Button)`
  margin-top: 2.5rem;
  width: 100%;
`
