import styled from 'styled-components'

export const Main = styled.main`
  display: flex;
  align-items: flex-start;
  justify-content: center;
  margin: 120px auto;
  width: 100%;
  gap: 120px;

  @media (max-width: 1024px){
    gap: 60px;
  }

`
