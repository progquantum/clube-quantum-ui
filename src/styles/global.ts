import { createGlobalStyle } from 'styled-components';
import 'react-loading-skeleton/dist/skeleton.css';
import 'bootstrap/dist/css/bootstrap.min.css';

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
    margin-bottom: 0;
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

  .paginationContainer {
    display: flex;
    justify-content: center;
    align-items: center;
    gap: 1rem;
    list-style: none;

    svg {
      cursor: pointer;
    }
  }

  .pageLink {
    width: 1.6875rem;
    height: 1.6875rem;
    background: transparent;
    border-radius: .2rem;
    color: ${({ theme }) => theme.colors.gray[400]};
    display: flex;
    justify-content: center;
    align-items: center;
    cursor: pointer;
  }

  .activeLink {
    width: 1.6875rem;
    height: 1.6875rem;
    background: ${({ theme }) => theme.colors.mediumslateBlue};
    color: white;
  }

  :root {
    --shape: ${({ theme }) => theme.colors.white};
  }

  .map-container {
    height: 400px;
    margin: 5rem 0;
  }

  .map-container canvas {
    border-radius: 0.6rem;
  }

  .map-container .mapboxgl-ctrl,
  .map-container .mapboxgl-ctrl-attrib {
    display: none;
  }

  .sidebar {
    background-color: rgba(35, 55, 75, 0.9);
    color: #fff;
    padding: 6px 12px;
    font-family: monospace;
    z-index: 1;
    position: absolute;
    top: 0;
    left: 0;
    margin: 12px;
    border-radius: 4px;
    }


    //style carousel bootstrap
    .carousel-indicators [data-bs-target] {
  width: 10px !important;
  height: 10px !important;
  border: 1px solid transparent !important;
  border-radius: 10px;
}

.carousel-indicators .active {
  width: 32px !important;
  background: linear-gradient(90.31deg, #8FC93A -1.94%, #3CD2A2 102.2%) !important;
}

 `;
