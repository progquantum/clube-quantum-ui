import styled, { css } from 'styled-components'

export const Container = styled.main`
  background: linear-gradient(180deg, #001F80 0%, #0C61FF 100%);
  padding-top: 1rem;

  animation: show 0.3s ease-in forwards;

  @keyframes show {
    0% {
      opacity: 0;
    }
    50% {
      opacity: 0.5;
    }
    100% {
      opacity: 1;
    }
  }
`

const wrapper = css`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const CashBackWrapper = styled.section`
  ${wrapper}

  padding: 0 1rem;

  @media(max-width: 730px) {
    padding-top: 3rem;
    text-align: center;

    > span {
      display: none !important;
    }
  }
`

export const CashBackContent = styled.div`
  max-width: 734px;
  width: 100%;

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  color: ${({ theme }) => theme.colors.white};

  h1 {
    font-size: 2.5rem;
    font-weight: 900;
    margin-bottom: 2.5rem;
  }

  h6 {
    font-size: 1.75rem;
    font-weight: 500;
    margin-bottom: 2.5rem;
  }

  button {
    max-width: 250px;
    width: 100%;
    color: ${({ theme }) => theme.colors.midnightBlue};
    font-weight: 900;
    font-size: 1rem;
  }

  @media(max-width: 730px) {
    align-items: center;
  }
`

export const ArrowDownWrapper = styled.div`
  width: 100%;
  margin: 5rem 0;

  display: flex;
  justify-content: center;

  > span {
    cursor: pointer;
  }
`

export const Wrapper = styled.section`
  max-width: 1920px;
  width: 100%;
  margin: 0 auto;
  padding: 0 1rem;

  @media(max-width: 870px) {
    margin-bottom: 5rem;
  }
`

export const Content = styled.div`
  width: 100%;

  display: flex;
  align-items: center;

  &.second-content {
    flex-direction: row-reverse;

    div {
      width: 50%;
      margin-left: 0;
      margin-right: 50px;
    }
  }

  @media(max-width: 870px) {
    &, &.second-content {
      flex-direction: column-reverse;

      div {
        width: 100%;
        margin: 0;
      }
    }
  }
`

export const TextContent = styled.div`
  width: 50%;
  margin-left: 100px;

  color: ${({ theme }) => theme.colors.white};

  h1 {
    font-weight: 900;
    margin-bottom: 30px;
    font-size: 2rem;

    &:last-of-type {
      margin-top: 70px;
    }
  }

  h6 {
    font-weight: 500;
    font-size: 1.25rem;
  }

  @media(max-width: 870px) {
    width: 100%;
    text-align: center;
    margin-bottom: 3rem !important;
  }
`

export const FaqWrapper = styled.section`
  max-width: 100%;
  background: linear-gradient(180deg, #001F80 0%, #0C61FF 100%);

  > div {
    ${wrapper}

    margin: 0 auto 2rem;
    padding: 7rem 1rem;

    @media(max-width: 1000px) {
      justify-content: center;

      > span {
        display: none !important;
      }
    }
  }
`

export const FaqContent = styled.div`
  max-width: 472px;
  width: 100%;
  color: ${({ theme }) => theme.colors.white};

  display: flex;
  flex-direction: column;
  align-items: flex-start;

  h1 {
    font-weight: 900;
    font-size: 1.75rem;
    margin-bottom: 50px;
  }
`

export const Box = styled.div`
  width: 100%;
  min-height: 290px;
  padding: 50px;
  border-radius: 30px;
  border: 3px solid ${({ theme }) => theme.colors.white};

  &:last-of-type {
    margin-top: 30px;
  }

  h2 {
    font-size: 1.5rem;
    font-weight: 700;
    margin-bottom: 25px;
  }

  p {
    font-size: 1rem;
    font-weight: 500;
    line-height: 1.5rem;
  }
`
