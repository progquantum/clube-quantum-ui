import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: sans-serif;
    font-size: ${({ theme }) => theme.fonts.sizes.base};
    font-weight: 400;
  }

  input,
  button {
    outline: 0;
  }

  button {
    border: 0;
    outline: 0;
    cursor: pointer;
  }

  ul {
    list-style-type: none;
  }
`
