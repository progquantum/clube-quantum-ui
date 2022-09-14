import { createGlobalStyle } from 'styled-components'
import 'react-toastify/dist/ReactToastify.css'
import 'react-loading-skeleton/dist/skeleton.css'

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
    height: auto;
    font-size: ${({ theme }) => theme.fontSizes.base};
    color: ${({ theme }) => theme.colors.gray[700]};
    text-rendering: optimizeLegibility !important;
    -webkit-font-smoothing: antialiased !important;
    -moz-osx-font-smoothing: grayscale;
  }

  body, #next {
    min-height: 100vh;
    position: relative;
    display: flex;
    flex-direction: column;
  }

  a {
    text-decoration: none;
    background: none;
    cursor: pointer;
    border: 0;
    transition: 180ms ease-in-out;
  }

  #next {
    height: 100%;
  }

  body, input, button {
    font: 1rem 'Montserrat', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
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


  ul {
    list-style-type: none;
  }

  .react-modal-overlay {
    background: rgba(0,0,0, 0.5);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    display: flex;
    align-items: center;
    justify-content: center;
    
    @media (max-width: 500px) {
      align-items: center;
    }
  }
  .react-modal-container-small {
    width: 100%;
    max-width: 27.0625rem;
    background: white;
    padding:  1.25rem 1.5rem;
    position: relative;
    border-radius: .95rem;

    @media (max-width: 700px) {
      max-width: 25rem;
    }
    @media (max-width: 500px) {
      max-width: 20.625rem;
      padding: 1.5rem;
    }
  }

  [disable] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  :root {
    --shape: ${({ theme }) => theme.colors.white};
  }
`
