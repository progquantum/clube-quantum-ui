import styled from 'styled-components'

export const Container = styled.button`
  width: 15.6rem;
  height: 2.75rem;
  background: ${({ theme }) => theme.colors.light};
  color: ${({ theme }) => theme.colors.midnightBlue};
  border-radius: 40px;
`
