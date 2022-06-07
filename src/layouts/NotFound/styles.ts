import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  margin-bottom: 6.25rem;
`

export const Wrapper = styled.div`
  max-width: 1640px;
  width: 100%;
  margin: 5rem auto 0;

  display: flex;
  align-items: center;
  justify-content: center;
  gap: 10rem;

  @media(max-width: 950px) {
    gap: 3rem;
  }

  @media(max-width: 820px) {
    > span {
      display: none !important;
    }
  }
`

export const Info = styled.div`
  display: flex;
  flex-direction: column;
  align-items: center;

  color: ${({ theme }) => theme.colors.gray[400]};
  font-weight: 900;

  h1 {
    font-size: 3rem;
    margin-bottom: 1rem;
  }

  h3 {
    font-size: 1.5rem;
    margin-bottom: 2.5rem;
  }

  a {
    width: 22rem;
    height: 3rem;
    background-color: ${({ theme }) => theme.colors.midnightBlue};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
    font-weight: 600;
    border-radius: 40px;

    display: flex;
    align-items: center;
    justify-content: center;
  }

  @media(max-width: 400px) {
    h1 {
      font-size: 2.5rem;
    }

    h3 {
      font-size: 1.3rem;
    }

    a {
      width: 20rem;
    }
  }
`
