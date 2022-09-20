import styled from 'styled-components'

export const Form = styled.form`
  width: 100%;
  display: flex;
  max-width: 21.875rem;
  flex-direction: column;
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
  margin-top: 24px;
  display: flex;
  flex-direction: column;
  justify-content: space-between;
  gap: 12px;
  button:last-of-type {
    margin: 0;
  }
`

export const JumpStepButton = styled.p`
  margin-top: 15px;
  font-weight: 500;
  font-size: 14px;
  line-height: 17px;
  color: ${({ theme }) => theme.colors.midnightBlue};
  text-align: center;
  cursor: pointer;
`
