import { createGlobalStyle } from 'styled-components'

export default createGlobalStyle`
  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93, 75%; //15px
    }

    @media (max-width: 720px) {
      font-size: 87, 5%; //14px
    }
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

  h1,
  h2,
  h3,
  h4,
  h5,
  h6,
  strong {
    font-weight: 600;
  }

  body,
  input,
  textarea,
  button {
    font-weight: 400;
  }

  a {
    text-decoration: none;
  }

  ul {
    list-style-type: none;
  }

  [disable] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  :root {
    --shape: ${({ theme }) => theme.colors.white};
  }
`
