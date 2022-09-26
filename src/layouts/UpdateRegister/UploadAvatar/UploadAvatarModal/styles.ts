import styled from 'styled-components'

import { Button } from 'components/Button'
import { Input } from 'components/Input'

export const Container = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: .9rem;
  margin: 0 auto;
  max-width: 22rem;

  h1 {
    font-size: 1.125rem;
    font-weight: 900;
    color: ${({ theme }) => theme.colors.gray[400]};
    margin-bottom: 2rem;
  }

  p {
    font-size: .7rem;
    line-height: 1.6;
    color: ${({ theme }) => theme.colors.gray[400]};
  }
`

export const UploadButton = styled.label`
  width: 100%;
  margin-top: 2rem;
  border: 2px solid ${({ theme }) => theme.colors.mediumslateBlue};
  display: flex;
  justify-content: center;
  align-items: center;
  gap: .8rem;
  padding: 0.5rem 1.5rem;
  border-radius: 2.5rem;
  background: transparent;
  color: ${({ theme }) => theme.colors.mediumslateBlue};
  cursor: pointer;
  margin-bottom: 1rem;

  &:hover {
  color: ${({ theme }) => theme.colors.white};
  background: ${({ theme }) => theme.colors.mediumslateBlue};
  }
`

export const CancelButton = styled(Button)`
  width: 100%;
  background: ${({ theme }) => theme.colors.danger};
  border: 2px solid ${({ theme }) => theme.colors.danger};
  color: ${({ theme }) => theme.colors.white};

  &:hover {
    color:  ${({ theme }) => theme.colors.danger};
    background: transparent;
  }
`

export const ConfirmButton = styled(Button)`
  width: 100%;
  border: 2px solid transparent;
  margin-bottom: 1rem;
  background: ${({ theme }) => theme.colors.midnightBlue};

  &:hover {
  background: ${({ theme }) => theme.colors.mediumslateBlue};
  }
`

export const InputFile = styled.input`
  display: none;
`

export const ImagePrev = styled.img`
  width: 12rem;
  height: 12rem;
  object-fit: cover;
  border-radius: 50%;
`

export const AvatarForm = styled.form`
  width: 100%;
`
