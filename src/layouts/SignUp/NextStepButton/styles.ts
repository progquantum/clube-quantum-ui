import styled from 'styled-components'

export const Container = styled.button`
  width: 3.125rem;
  height: 3.125rem;
  border-radius: 100%;
  background-color: ${({ theme }) => theme.colors.midnightBlue};
  margin-top: 5rem;

  display: flex;
  align-items: center;
  justify-content: center;

  svg {
    font-size: 1.5rem;
    color: ${({ theme }) => theme.colors.white};
  }
`
