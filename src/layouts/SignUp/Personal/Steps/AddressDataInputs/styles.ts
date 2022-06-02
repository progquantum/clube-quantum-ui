import styled from 'styled-components'

export const Container = styled.div`
  max-width: 23rem;
  width: 100%;
`

export const Form = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  input::placeholder {
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`
