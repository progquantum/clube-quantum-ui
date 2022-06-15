import styled, { css } from 'styled-components'
import { FieldError } from 'react-hook-form'

export const Container = styled.div`
  width: 100%;
  display: flex;
  align-items: center;
  gap: 0.3rem;
  position: relative;
  margin-bottom: 1rem;
  margin-top: 2rem;
`

type LabelProps = {
  isDirty: boolean
}

export const Label = styled.label<LabelProps>`
  position: absolute;
  left: 0.9rem;
  top: 0.8rem;
  pointer-events: none;
  user-select: none;
  transition: all 0.5s ease;
  font-weight: 600;
  color: ${({ theme }) => theme.colors.gray[700]};

  ${props => props.isDirty &&
  css`
      top: -1.2rem;
      left: 0.1rem;
      font-size: 0.9rem;
      font-weight: 700;
    `
  }
`

type InputProps = {
  error: FieldError
  isDirty: boolean
}

export const Input = styled.input<InputProps>`
  width: 100%;
  display: block;
  padding: 0.8rem;
  box-shadow: none;
  outline: none;
  border: none;
  background-color: inherit;
  font-size: 1rem;
  transition: all 0.5s ease;
  border-bottom: 2.5px solid ${({ theme }) => theme.colors.gray[700]};
  color: ${({ theme }) => theme.colors.gray[700]};

  ${props =>
    props.isDirty &&
    css`
      border-bottom: 2.5px solid #9A97FA;
    `}

  &:focus ~ label {
    top: -1.2rem;
    left: 0.1rem;
    font-size: 0.9rem;
    font-weight: 700;
  }

  &:focus {
    border-bottom: 2.5px solid #9A97FA;
  }

  &::placeholder {
    color: #9A97FA;
  }
`
