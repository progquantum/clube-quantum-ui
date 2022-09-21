import styled from 'styled-components'

export const Container = styled.div`
  max-width: 21.875rem;
  width: 100%;
`

export const Form = styled.form`
  width: 100%;
  display: flex;
  flex-direction: column;
  align-items: flex-end;
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
