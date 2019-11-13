import { createGlobalStyle } from 'styled-components';

// Needed to add classes to all DatePicker components
// https://github.com/airbnb/react-dates#initialize
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

const GlobalStyle = createGlobalStyle`
  html {
    font-size: 62.5%;
  }
  body {
    font-size: 1.4rem;
    font-weight: 400;
  }
  body * {
    font-family: 'Overpass', sans-serif;
    box-sizing: border-box;
  }
`;

export default GlobalStyle;
