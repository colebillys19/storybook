import { createGlobalStyle } from 'styled-components';

import { colors } from '../src/shared/defaultStyleHelper';

const { lightGrey } = colors;

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  html, body {  
    height: 100%;
    width: 100%;
  }
  body {
    font-family: 'RedHatText', sans-serif;
    font-size: 1.4rem;
    font-weight: 400;
  }
  body.fontLoaded {
    font-family: 'RedHatText', sans-serif;
  }
  #app {
    background-color: ${lightGrey};
    min-height: 100%;
    min-width: 100%;
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
  @media print {
    #bottom-sidebar-wrapper,
    #footer-wrapper,
    #header-section,
    #left-alert,
    #mobile-app-bar,
    #right-alert,
    #sidebar-drawer { 
      display: none;
    }
    #app {
      background-color: white;
    }
    #headline-wrapper {
      display: block;
    }
  }
`;

export default GlobalStyle;
