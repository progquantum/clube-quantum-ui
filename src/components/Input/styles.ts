import styled, { css } from 'styled-components'
import { FaExclamation } from 'react-icons/fa'
import { RiCloseLine } from 'react-icons/ri'
import { FieldError } from 'react-hook-form'

type StyledInputProps = {
  errors?: FieldError
  isDirty?: boolean
  secondary?: boolean
}

export const StyledInput = styled.div<StyledInputProps>`
  width: 100%;
  display: flex;
  flex-direction: column;
  gap: 0.3rem;
  position: relative;
  margin-bottom: 1rem;
  margin-top: 2rem;

  input {
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
  }

  label {
    position: absolute;
    left: 0.9rem;
    top: 0.8rem;
    pointer-events: none;
    user-select: none;
    transition: all 0.5s ease;
    font-weight: 600;
    color: ${({ theme }) => theme.colors.gray[700]};

    ${props =>
      props.isDirty &&
      css`
        top: -1.2rem;
        left: 0.1rem;
        font-size: 0.9rem;
        font-weight: 700;
      `}
  }

  span {
    padding-left: 0.8rem;
    bottom: 1.8rem;
    left: 0.1rem;
    font-size: 0.8rem;
    color: ${({ theme }) => theme.colors.danger};
  }
`

export const Exclamation = styled(FaExclamation)`
  position: absolute;
  right: 0.2rem;
  top: 0.9rem;
  color: ${({ theme }) => theme.colors.danger};
`

export const Error = styled(RiCloseLine)`
  position: absolute;
  right: 0rem;
  top: 0.7rem;
  font-weight: 900;
  font-size: 1.4rem;
  color: ${({ theme }) => theme.colors.danger};
`
