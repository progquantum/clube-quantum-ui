import { createGlobalStyle } from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';

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
    background: ${({ theme }) => theme.colors.background};
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

  body, input, button, textarea {
    font: 1rem 'Montserrat', -apple-system, BlinkMacSystemFont, "Segoe UI", Roboto, Helvetica, Arial, sans-serif, "Apple Color Emoji", "Segoe UI Emoji", "Segoe UI Symbol";
  }

  input, textarea, button {
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

  .modal-overlay {
    background: rgba(0, 0, 0, 0.6);
    position: fixed;
    top: 0;
    bottom: 0;
    right: 0;
    left: 0;
    z-index: 5;
  }

  .modal-container {
    position: fixed;
    inset: 0;
    z-index: 99999;
    background-color: ${({ theme }) => theme.colors.background};
    width: 100%;
    max-width: 33rem;
    height: fit-content;
    margin: auto auto;
    padding: 2rem;
    border-radius: 1rem;

    @media (max-width: 500px) {
      margin-bottom: 0;
      border-radius: 1rem 1rem 0 0;
      cursor: grab;
    }
  }

  .drag, .drag-2 {
    display: none;

    @media (max-width: 500px) {
      display: block;
      width: 3rem;
      height: .25rem;
      position: absolute;
      top: 10px;
      right: 0;
      left: 0;
      background-color: ${({ theme }) => theme.colors.gray[200]};
      border-radius: 4px;
      border: none;
      margin: 0 auto;
    }
  }


  .modal-close {
    position: absolute;
    top: 5px;
    right: 10px;
    border-radius: 0.625rem;
    padding: 1rem;
    border: none;
    background: transparent;
    color: ${({ theme }) => theme.colors.gray[400]};
    display: flex;
    align-items: center;
    transition: 0.2s all;

    &:hover {
      color: ${({ theme }) => theme.colors.danger};
    }

    @media (max-width: 500px) {
      display: none;
    }
  }


  button:not(:hover)[disable] {
    opacity: 0.6;
    cursor: not-allowed;
  }

  #nprogress {
    pointer-events: none;
  }

  #nprogress .bar {
    background: ${({ theme }) => theme.colors.royalblue};
    position: fixed;
    z-index: 1031;
    top: 0;
    left: 0;
    width: 100%;
    height: 4px;
  }


  :root {
    --shape: ${({ theme }) => theme.colors.white};
  }
`;
