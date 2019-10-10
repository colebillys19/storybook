import { createGlobalStyle, css } from 'styled-components';

export const htmlStyles = css`
  font-size: 62.5%;
`;

export const GlobalStyle = createGlobalStyle`
  html {
    ${htmlStyles}
  }
`;
