import styled from 'styled-components'

export const Container = styled.div`
  max-width: 23rem;
  width: 100%;

  form {
    width: 100%;

    display: flex;
    flex-direction: column;
    align-items: flex-end;

    input::placeholder {
      color: ${(props) => props.theme.colors.gray[200]};
    }

    button {
      width: 3.125rem;
      height: 3.125rem;
      border-radius: 100%;
      background-color: ${(props) => props.theme.colors.midnightBlue};
      margin-top: 5rem;

      display: flex;
      align-items: center;
      justify-content: center;

      svg {
        font-size: 1.5rem;
        color: ${(props) => props.theme.colors.white};
      }
    }
  }
`
