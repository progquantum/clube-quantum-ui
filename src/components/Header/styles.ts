import styled from 'styled-components'

export const Container = styled.header`
  width: 100%;
  height: 7.1875rem;
  background-color: ${(props) => props.theme.colors.white};
  box-shadow: 2px 4px 15px rgba(0, 0, 0, 0.15);

  display: flex;
  align-items: center;
  justify-content: center;
`
