import { createGlobalStyle, css } from 'styled-components';

export const htmlStyles = css`
  font-size: 62.5%;
`;

export const GlobalStyle = createGlobalStyle`
html {
  font-size: 62.5%;
}

html, body {  
  height: 100%;
  width: 100%;
}

body {
  background-color: #F0F0F7;
  font-family: 'RedHatText', sans-serif;
  font-size: 1.4rem;
  font-weight: 400;
}

body.fontLoaded {
  font-family: 'RedHatText', sans-serif;
}

#app {
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
