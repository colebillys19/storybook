import { createGlobalStyle } from 'styled-components';

/**
 * needed to add classes to all DatePicker components
 * https://github.com/airbnb/react-dates#initialize
 * if DatePicker is not used, lines 8 & 9 can be removed
 */
import 'react-dates/initialize';
import 'react-dates/lib/css/_datepicker.css';

import { msBrightPurple } from '../src/utils/defaultStyleHelper';

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
  
  /* the following styles apply to DatePicker's portal feature */
  /* if DatePicker is not used, they can be removed */
  .DayPickerNavigation_button:first-of-type {
    display: inline-block;
    left: 2.5rem;
    position: absolute;
    top: 1.8rem;
  }
  .DayPickerNavigation_button:last-of-type {
    display: inline-block;
    position: absolute;
    right: 2.5rem;
    top: 1.8rem;
  }
  .CalendarMonth_caption {
    color: ${msBrightPurple};
  }
  .CalendarDay__selected {
    background-color: ${msBrightPurple};
    border: none;
  }
`;

export default GlobalStyle;
