import styled from 'styled-components'

export const DataBank = styled.section`
  width: 100%;

  display: flex;
  align-items: center;
  justify-content: space-between;
`

export const Container = styled.div`
  max-width: 23rem;
  width: 100%;
`

export const DataWrapper = styled.div`
  h4 {
    font-size: 1rem;

    &:last-of-type {
      font-weight: 900;
    }
  }

  &:last-of-type h4 {
    text-align: end;
  }
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;

  p {
    margin-top: 2rem;
    font-weight: 500;
    font-size: 1rem;
  }
`

export const Wrapper = styled.div`
  width: 100%;
  margin-top: 2rem;

  display: flex;
  align-items: center;
  justify-content: space-between;

  img {
    width: 30%;
  }
`

export const ButtonGroup = styled.section`
  width: 100%;
  margin-top: 5rem;

  display: flex;
  justify-content: space-between;

  button:last-of-type {
    margin: 0;
  }
`

export const JumpStepButton = styled.button`
  max-width: 12.5rem;
  width: 100%;
  height: 3.125rem;
  background-color: ${({ theme }) => theme.colors.lightsteelblue};
  border-radius: 2rem;
  color: ${({ theme }) => theme.colors.midnightBlue};
  font-weight: 600;
  font-size: 1rem;
`
