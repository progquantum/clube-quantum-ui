import styled from 'styled-components'

export const StyledPinInput = styled.input`
  width: 2.5rem;
  height: 2.5rem;
  background-color: transparent;

  border: 2px solid ${({ theme }) => theme.colors.gray[700]};
  border-radius: 0.625rem;

  font-size: 0.8rem;
  text-align: center;
  color: ${({ theme }) => theme.colors.gray[700]};
  font-size: 1rem;
  font-weight: bold;

  & + input {
    margin-left: 0.9375rem;
    @media (max-width: 414px){
      margin-left: 0.75rem;
  }
  }
`
