import React from 'react';
import JssProvider from 'react-jss/lib/JssProvider';
import { create } from 'jss';
import {
  createGenerateClassName,
  createMuiTheme,
  jssPreset,
  MuiThemeProvider,
} from '@material-ui/core/styles';

import {
  msMainGreen,
  msDeepPurple,
  msLightGrey,
} from 'utils/defaultStyleHelper';

const generateClassName = createGenerateClassName();
const jss = create({
  ...jssPreset(),
  insertionPoint: document.getElementById('jss-insertion-point'),
});

export const muiTheme = createMuiTheme({
  overrides: { MuiTooltip: { tooltip: { fontSize: '1.2rem' } } },
  palette: {
    accent3Color: msMainGreen,
    primaryColor: msDeepPurple,
  },
  stepper: { iconColor: msLightGrey },
  typography: {
    fontFamily: '"Overpass", sans-serif',
    useNextVariants: true,
  },
});

const ClassNameGenerator = (p) =>
  <JssProvider generateClassName={generateClassName} jss={jss} {...p}>
    {p.children}
  </JssProvider>

class ThemeProvider extends React.Component {
  render() {
    return (
      <ClassNameGenerator>
        <MuiThemeProvider theme={muiTheme}>
          {this.props.children}
        </MuiThemeProvider>
      </ClassNameGenerator>
    )
  }
}

export default ThemeProvider;
