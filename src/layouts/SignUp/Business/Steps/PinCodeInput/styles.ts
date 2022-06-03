import styled from 'styled-components'

export const Container = styled.div`
  max-width: 30rem;
  width: 100%;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-start;
  gap: 2rem;
  color: ${({ theme }) => theme.colors.gray[700]};
`

export const Paragraph = styled.p`
  margin-top: -1.5rem;

  span {
    background-color: transparent;
    font-size: 1rem;
    font-weight: bold;
    cursor: pointer;
  }
`

export const Button = styled.button`
  width: 10.5rem;
  height: 2.75rem;
  background-color: ${({ theme }) => theme.colors.midnightBlue};
  border-radius: 2.5rem;
  color: ${({ theme }) => theme.colors.white};
  font-weight: 600;

  display: flex;
  align-items: center;
  justify-content: center;
  align-self: flex-end;
`
