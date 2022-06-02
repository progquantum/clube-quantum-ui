import styled from 'styled-components'

export const Container = styled.form`
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-end;

  input::placeholder {
    color: ${({ theme }) => theme.colors.gray[200]};
  }
`
