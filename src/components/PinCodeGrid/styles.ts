import styled from 'styled-components'

export const StyledPinInput = styled.input`
  width: 3rem;
  height: 3rem;
  background-color: transparent;

  border: 2px solid ${(props) => props.theme.colors.gray[700]};
  border-radius: 1rem;

  font-size: 0.8rem;
  text-align: center;
  color: ${(props) => props.theme.colors.gray[700]};
  font-size: 1rem;
  font-weight: bold;

  & + input {
    margin-left: 1rem;
  }
`
