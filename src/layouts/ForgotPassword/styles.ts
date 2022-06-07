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

export const Form = styled.form`
  width: 350px;
  background-color: ${({ theme }) => theme.colors.white};
  padding: 3.75rem 2.1875rem;
  filter: drop-shadow(0px 18px 6px rgba(0, 0, 0, 0.22));
  border-top: 1px solid rgba(0, 0, 0, 0.1);
  border-radius: 20px;
  color: ${({ theme }) => theme.colors.gray[700]};
  font-weight: 700;

  display: flex;
  flex-direction: column;
  align-items: center;

  h4 {
    font-size: 1.3rem;
    margin-bottom: 1.5rem;
  }

  h6 {
    font-size: 0.9rem;
  }

  input {
    margin-bottom: 1.5rem;
  }

  button {
    width: 115px;
    background-color: ${({ theme }) => theme.colors.midnightBlue};
    color: ${({ theme }) => theme.colors.white};
    font-size: 1rem;
    font-weight: 600;
  }
`
