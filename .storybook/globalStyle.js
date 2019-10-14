import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body {
    font-family: 'RedHatText', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
  }
  body.fontLoaded {
    font-family: 'RedHatText', sans-serif;
  }
  h1,
  h2,
  h3 {
    font-family: 'RedHatDisplay', sans-serif;
  }
  p,
  label,
  div,
  input[type=text] {
    font-family: 'RedHatText', sans-serif;
  }
  @page {
    margin: 1.2cm;
  }
`;

export default GlobalStyle;
