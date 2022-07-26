import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  max-width: 70.725rem;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;

  h2 {
    font-weight: 900;
    font-size: 2rem;
    line-height: 1.6;
    max-width: 16ch;
    margin-bottom: 2.5rem;
  }
  @media (min-width: 280px) and (max-width: 767px) {
    flex-direction: column;
    gap: 0;
    h2 {
      font-size: 1.5rem;
    }
  }
`

export const Content = styled.div`
  margin: 0 0 0 2rem;
  @media (min-width: 280px) and (max-width: 767px) {
   margin: 2rem;
  }
`
export const Image = styled.div`
  margin: 0 2rem 0 0;
  @media (min-width: 280px) and (max-width: 767px) {
   max-width: 230px;
   order: -1;
   margin: 2rem;
  }
`
