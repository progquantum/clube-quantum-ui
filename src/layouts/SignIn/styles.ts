import styled from 'styled-components'

export const Wrapper = styled.main`
  padding-top: 2rem;
`

export const Form = styled.form`
  max-width: 30rem;
  width: 100%;
  margin: 0 auto;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.colors.white};
  border-radius: 20px 20px 50px 0;
  border-top: 1px solid rgba(0, 0, 0, 0.1);

  display: flex;
  flex-direction: column;
  align-items: center;

  position: relative;
  z-index: 1;
  filter: drop-shadow(0px 18px 6px rgba(0, 0, 0, 0.22));

  &:before {
    content: '';
    position: absolute;
    height: 100px;
    width: 50px;
    bottom: -100px;
    left: 0;
    background-color: transparent;
    border-top-left-radius: 50px;
    box-shadow: 0 -50px 0 0 white;
  }

  h1 {
    color: ${({ theme }) => theme.colors.gray[700]};
    text-align: center;
    margin-top: 1rem;
  }

  > div {
    max-width: 25.5rem;
    width: 100%;
  }
`

export const LoginAbout = styled.div`
  width: 100%;
  margin: 2.5rem 0 1.875rem;

  display: flex;
  flex-direction: column;
  align-items: flex-end;
  gap: 0.625rem;

  span {
    display: flex;
    align-items: center;
    gap: 0.7rem;
  }

  span, a {
    font-weight: 500;
  }
`

export const CreateAccountButtonWrapper = styled.div`
  max-width: 30rem;
  width: 100%;
  height: 23.9375rem;
  margin: 0 auto 1.3125rem;
  padding: 0 2rem;
  background-color: ${({ theme }) => theme.colors.midnightBlue};
  color: ${({ theme }) => theme.colors.white};
  border-radius: 0 0 20px 20px;

  display: flex;
  flex-direction: column;
  align-items: center;
  justify-content: center;
  gap: 2rem;

  transform: translateY(-40px);

  h1 {
    max-width: 31.875rem;
    width: 100%;
    margin-bottom: 1.5rem;

    font-weight: 700;
    font-size: 1.75rem;
    color: ${({ theme }) => theme.colors.white};
    text-align: center;
  }

  a {
    background-color: ${({ theme }) => theme.colors.white};
    padding: 1rem 3rem;
    color: ${({ theme }) => theme.colors.midnightBlue};
    font-weight: 600;
    border-radius: 2.5rem;
    text-decoration: none;
  }
`
