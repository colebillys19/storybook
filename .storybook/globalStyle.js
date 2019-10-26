import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body * {
    font-family: 'Overpass', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
  }
`;

export default GlobalStyle;
