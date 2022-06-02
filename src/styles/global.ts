import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  body {
    font-family: 'Montserrat', -apple-system, BlinkMacSystemFont, Segoe UI, Roboto, Oxygen,
    Ubuntu, Cantarell, Fira Sans, Droid Sans, Helvetica Neue, sans-serif;
    font-size: ${({ theme }) => theme.fontSizes.base};
    font-weight: 400;
  }

  button, input, textarea {
    font-family: 'Montserrat', sans-serif;
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

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }
`
