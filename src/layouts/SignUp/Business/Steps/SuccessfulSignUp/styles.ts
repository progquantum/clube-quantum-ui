import styled from 'styled-components'

export const Container = styled.div`
  max-width: 23rem;
  width: 100%;
  color: ${({ theme }) => theme.colors.gray[700]};

  display: flex;
  flex-direction: column;
  align-items: center;

  h3:first-of-type {
    margin: 1.875rem 0 3rem;
    font-size: 1.25rem;
    font-weight: 900;
  }

  p {
    font-size: 1.25rem;
    text-align: center;
    margin-bottom: 1rem;
  }

  h3:last-of-type {
    font-size: 1.25rem;
    font-weight: 700;
  }

  button {
    padding: 1rem 1.875rem;
    margin-top: 2rem;
    border-radius: 5rem;
    background-color: ${({ theme }) => theme.colors.midnightBlue};
    color: ${({ theme }) => theme.colors.white};
    font-size: 0.75rem;
    font-weight: 900;
  }
`
