import styled from 'styled-components'

export const Container = styled.main`
  width: 100%;
  height: 100%;
  background: linear-gradient(180deg, #001F80 0%, #0C61FF 100%);

  display: flex;
  flex-direction: column;
  align-items: center;

  font-family: ${props => props.theme.fonts.montserrat};
`

export const FirstSection = styled.section`
  max-width: 1200px;
  width: 100%;
  margin: 0 auto;

  display: flex;
  align-items: flex-start;
  justify-content: space-between;

  /* @media (max-width: 1500px) {
    margin: 10rem 8rem 0;
  }

  @media (max-width: 935px) {
    flex-direction: column-reverse;
  }

  @media (max-width: 550px) {
    margin: 5rem auto;
  } */

  > div {
    margin-top: 2rem;
    color: #ffffff;

    h1, h6 {
      font-weight: 900;
      margin-bottom: 2.5rem;
    }

    h1 {
      font-size: 2.5rem;
    }

    h6 {
      font-size: 1.125rem;
    }

    button {
      background-color: #ffffff;
      border-radius: 2.5rem;
      padding: 1rem 1.875rem;
      color: #001F80;
      font-weight: 900;
      font-size: 1rem;
    }
  }

  /* > div {
    margin-top: 6rem;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    justify-content: center;

    @media (max-width: 1050px) {
      margin-top: 1rem;
    }

    @media (max-width: 935px) {
      margin-bottom: 2rem;
      align-items: center;
    }
  } */

  img {
    max-width: 42.5rem;
    width: 100%;
    height: auto;

  /*  @media (max-width: 1300px) {
      width: 25rem;
      height: 25rem;
    }
    @media (max-width: 420px) {
      width: 20rem;
      height: 20rem;
    } */
  }
`

export const SecondSection = styled.section`
  max-width: 1660px;
  width: 100%;
  margin: 3rem auto 0;

  display: flex;
  align-items: center;
  gap: 4.375rem;

  /* @media (max-width: 935px) {
    flex-direction: column;
  } */

  img {
    max-width: 29.4375rem;
    width: 100%;
    height: 32rem;

    border-radius: 0.9375rem;
    box-shadow: 20px 20px 40px #001f80;

    /* @media (max-width: 1250px) {
      width: 30rem;
      height: 24rem;
    }
    @media (max-width: 430px) {
      width: 20rem;
      height: 16rem;
    } */
  }

  > div {
    max-width: 28.125rem;
    width: 100%;

    display: flex;
    flex-direction: column;
    gap: 4.375rem;
    /* @media (max-width: 1250px) {
      width: 50%;
      padding-right: 1rem;
    } */

    div {
      color: #ffffff;

      h1 {
        font-weight: 900;
        font-size: 2.5rem;
        margin-bottom: 1.875rem;
      }

      p {
        font-weight: 500;
        font-size: 1.25rem;
      }
    }
  }
`

export const ThirdSection = styled.section`
  max-width: 1660px;
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: flex-end;
  gap: 2rem;

  position: relative;
  z-index: 1;

  /* @media (max-width: 935px) {
    flex-direction: column-reverse;
  } */

  img {
    max-width: 30rem;
    width: 100%;
    height: 35rem;

    border-radius: 0.9375rem;
    box-shadow: 10px 40px 30px #001f80;

    /* margin-bottom: -1.75rem;
    z-index: 1; */

    /* @media (max-width: 1250px) {
      width: 37rem;
      height: 24rem;
    }
    @media (max-width: 530px) {
      width: 27rem;
      height: 17rem;
    }
    @media (max-width: 380px) {
      width: 20rem;
      height: 13rem;
    } */
  }

  > div {
    max-width: 24.6875rem;
    width: 100%;

    color: #ffffff;

    h1 {
      font-weight: 900;
      font-size: 2.5rem;
      margin-bottom: 1.875rem;
    }

    p {
      font-weight: 500;
      font-size: 1.25rem;
    }

    /* @media (max-width: 740px) {
      margin-left: 0;
      align-items: center;
    } */
  }
`

export const FaqContents = styled.section`
  max-width: 1660px;
  width: 100%;
  color: #ffffff;
  background: linear-gradient(180deg, #001F80 0%, #0C61FF 100%);
  padding: 10rem 0 0;

  transform: translateY(-100px);
  position: relative;
  z-index: 0;

  h1 {
    max-width: 1220px;
    width: 100%;
    margin: 0 auto;

    font-size: 2.5rem;
    font-weight: 900;
    margin-bottom: 3.125rem;
  }

  > div {
    width: 100%;
    margin: 0 auto;

    display: flex;
    justify-content: space-between;
    max-width: 1220px;

    img {
      max-width: 37.5rem;
      width: 100%;
      height: 26.25rem;
    }

    > div {
      display: flex;
      flex-direction: column;
      align-items: center;
      gap: 2.1875rem;

      button {
        background-color: #ffffff;
        border-radius: 2.5rem;
        padding: 1rem 1.875rem;
        color: #001F80;
        font-weight: 900;
        font-size: 1rem;
      }
    }
  }
`

export const Box = styled.div`
  max-width: 31.875rem;
  width: 100%;
  padding: 2rem;

  border: 3px solid #ffffff;
  border-radius: 1.25rem;

  h3 {
    font-size: 1.75rem;
    font-weight: 700;
    margin-bottom: 1.5625rem;
  }
`
