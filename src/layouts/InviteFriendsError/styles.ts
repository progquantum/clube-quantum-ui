import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  max-width: 75rem;
  margin: 0 auto;
  height: 100vh;
  display: flex;
  align-items: center;
  justify-content: center;
  gap: 3.5rem;
  padding: 5rem 2rem;

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

`
export const Image = styled.div`
  @media (min-width: 280px) and (max-width: 767px) {
   max-width: 230px;
   order: -1;
  }
`
