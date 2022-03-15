import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --black: #000;

    --bg-light: #EBF2F5;
    --bg-blue: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);

    --blue-900: #0089a5;
    --blue-500: #15C3D6;
  }

  * {
    margin: 0;
    padding: 0;
    box-sizing: border-box;
  }

  html {
    @media (max-width: 1080px) {
      font-size: 93.75%;
    }
    @media (max-width: 720px) {
      font-size: 87.5%;
    }
  }

  body {
    background: var(--bg-light);
    -webkit-font-smoothing: antialiased;
  }

  h1, h2, h3, h4, h5, h6, strong {
    font-weight: 600;
  }

  body, input, textarea, button {
    font-family: 'Nunito', sans-serif;
    font-weight: 300
  }

  button {
    cursor: pointer;
    border: 0;
  }

  [disabled] {
    opacity: 0.6;
    cursor: not-allowed;
  }
`
