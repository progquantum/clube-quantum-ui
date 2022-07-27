import styled from 'styled-components'

export const Container = styled.div`
  display: flex;
  align-items: center;
  flex-direction: row;
  flex-wrap: wrap;
  justify-content: space-evenly;
  width: 100%;
  height: 100vh;
  margin: 0 auto;
 
`
export const ContainerImage = styled.div`
  @media (max-width: 767px) {
    display: none;
  }

`

export const ContentsWrapper = styled.div`
  display: flex;
  flex-direction: column;
  justify-content: center;
  align-items: center;
  width: 265px;
  text-align: center;


  @media (max-width: 650px) {
    margin-left: 0;
  }

  h1 {
    font-size: 1.25rem;
    margin-bottom: 1.313rem;
    font-weight: 900;
  }

  p {
    margin-bottom: 3.75rem;
    font-weight: 500;
    font-size: 1.125rem;
  }

  button {
    margin-bottom: 0.938rem;
    width: 16.563rem;
    font-weight: 500;
    font-size: 0.875rem;
    padding: 0.625rem 1.813rem;

  }
`
