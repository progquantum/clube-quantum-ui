import styled from 'styled-components'

export const Container = styled.div`
  max-width: 30rem;
  width: 100%;

  form {
    width: 100%;
    display: flex;
    flex-direction: column;
    align-items: flex-start;
    gap: 2rem;
    color: ${(props) => props.theme.colors.gray[700]};

    p {
      margin-top: -1.5rem;

      span {
        background-color: transparent;
        font-size: 1rem;
        font-weight: bold;
        cursor: pointer;
      }
    }

    button {
      width: 10.5rem;
      height: 2.75rem;
      background-color: ${(props) => props.theme.colors.midnightBlue};
      border-radius: 2.5rem;
      color: ${(props) => props.theme.colors.white};
      font-weight: 600;

      display: flex;
      align-items: center;
      justify-content: center;
      align-self: flex-end;
    }
  }
`
