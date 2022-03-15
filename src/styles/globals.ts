import { createGlobalStyle } from 'styled-components'

export const GlobalStyle = createGlobalStyle`
  :root {
    --white: #fff;
    --black: #000;

    --bg-light: #EBF2F5;
    --bg-blue: linear-gradient(329.54deg, #29B6D1 0%, #00C7C7 100%);

    --blue-900: #0089a5;
    --blue-500: #15C3D6;

    --gray-800: #5C8599;
    --gray-700: #4D6F80;
    --gray-500: #8FA7B2;
    --gray-300: #D3E2E5;

    --white-500: #F5F8FA;

    --green-500: #37C77F;
    --green-200: #A1E9C5;
    --green-100: #EDFFF6;

    --red-500: #FF669D;
    --red-200: #FFBCD4;
    --red-100: #FFE9F1;
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
