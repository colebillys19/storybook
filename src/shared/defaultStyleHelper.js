import blueGrey from '@material-ui/core/colors/blueGrey';
import deepOrange from '@material-ui/core/colors/deepOrange';
import green from '@material-ui/core/colors/green';
import grey from '@material-ui/core/colors/grey';
import red from '@material-ui/core/colors/red';
import yellow from '@material-ui/core/colors/yellow';

// Default Font Family
export const redHatDisplay = "'RedHatDisplay', sans-serif";
export const redHatText = "'RedHatText', sans-serif";

export const footerOffset = '5.5rem';
export const footerMarginOffset = '0.5rem';
export const headerOffset = '12rem';
export const headingOffset = '4.1rem';
export const headerNavOffset = '7.2rem';
export const queryBuilderPaddingOffset = '6rem';

// Colors
export const errorColor = red[500];
export const whiteTextColor = grey[50];
export const calculatorLabelColor = grey[500];
export const lightGrey = '#85878D';
export const darkGrey = '#5C6067';
export const successGreen = 'rgba(45, 189, 154, 1)';
export const errorRed = 'rgba(193, 54, 63, 1)';
export const mobileMenuBlue = '#38639B';
export const muiDisabledTextColor = 'rgb(0, 0, 0, 0.26)';
export const readMessageGrey = '#FBFBFB';
// Shadows
export const greyshadow = `0.1rem 0 0.3rem 0 ${grey[300]}`;
export const greyshadowAlt = `0 0 1rem 0 ${grey[500]}`;
export const redshadow = `0 0 0.5rem 0 ${red[600]}`;
export const insetshadow = 'inset 0px 0px 16px 0px rgba(224,224,224,0.4)';
export const muiBoxShadow = '0px 5px 5px -3px rgba(0,0,0,0.2), 0px 8px 10px 1px rgba(0,0,0,0.14), 0px 3px 14px 2px rgba(0,0,0,0.12)';
// Transitions
export const transitionbackground = 'background 0.2s ease';
// Transition Colors
export const transitioncolor = 'color 0.2s ease';
// Backgrounds
export const darkbg = blueGrey[800];
export const lightbg = grey[300];
// BACKGROUND QUESTION HIGHLIGHT COLOR
export const highlightBackground = '#E8F5E9';
// Material UI Disabled Button background color
export const disabledBackground = 'rgba(0, 0, 0, 0.12)';
// Icon Colors
export const noMessagesGrey = '#e5e5f1';
export const iconGreen = '#2DBD9A';
export const iconGrey = '#85878D';

// DMI COLORS
export const dmiLightGreen = '#E8F5E9';
export const dmiMainGreen = '#009350';
export const dmiSecondaryColor = 'orange';

// SS PRIMARY INTERFACE COLORS
export const ssDarkBlue = '#0E2043';
export const ssDarkBlueHover = '#030b20';
export const ssDarkGrey = '#464A53';
export const ssGreyHover = '#BDBDBD';
export const ssLightBlue = '#4B9FE6';
export const ssLightGrey = '#F0F0F7';
export const ssMainBlue = '#2C5995';
export const ssMainBlueHover = '#214472';
export const ssYellow = '#EEB902';

// SS SECONDARY COLORS
export const ssBabyBlue = '#4ECFE6';
export const ssBrightGreen = '#2DBD9A';
export const ssDarkGray2 = '#5C6067';
export const ssDarkGray3 = '#85878D';
export const ssDarkGray4 = '#ADAFB3';
export const ssGray = '#DADBE3';
export const ssGreen = '#008767';
export const ssGreenHover = '#007257';
export const ssPurple = '#9826AC';
export const ssRed = '#C1363F';
export const ssRedHover = '#A02D34';

// Borders
export const borderStyle = 'solid';
export const borderWidth = '.5rem';
export const expansionPanelDividerStyle = `0.1rem solid ${ssLightGrey}`;
export const greenBorderColor = green[500];
export const greyBorder = `.1rem solid ${grey[300]}`;
export const greyDivider = `0.2rem solid ${ssLightGrey}`;
export const inputFocusedBorder = `0.2rem solid ${ssLightBlue}`;
export const redborder = `.1rem solid ${red[900]}`;
export const tableBorderStyle = '.1rem solid rgba(224, 224, 224, 1)';
export const inputBorder = '1px solid #c0c0c0';
// font sizes

export const dropdownText = '1.4rem';

export const donutChartColorScale = [
  ssBrightGreen,
  ssYellow,
  ssRed,
  ssGray,
];

export const donutChartLabelStyles = {
  fill: ssDarkGray3,
  fontFamily: redHatText,
};

export const ctaButtonStyles = `
  margin: 0 0 1.5rem 0;
  padding: .5rem 1.5rem;
  width: 17rem;
`;

// Style for all icons in the app.
// (Please move any style for icons to this file)
export const iconStyle = {
  alert: { color: yellow[500] },
  approved: { color: green[500] },
  autopayDashboard: {
    color: ssLightBlue,
    marginRight: '1rem',
  },
  block: { color: red[500] },
  button: {
    color: 'inherit',
    fontSize: '2.4rem',
    marginRight: '.6rem',
  },
  close: { /* color: red500 */ },
  completed: { color: ssGreen },
  dashboardCard: {
    border: `0.1rem solid ${ssLightBlue}`,
    borderRadius: '50%',
    color: 'inherit',
    height: '2.5rem',
    padding: '.6rem',
    width: '2.5rem',
  },
  drawerLogo: {
    height: '100%',
    width: '45%',
  },
  error: { color: red[500] },
  filefolder: { /* color: grey500 */ },
  filter: {
    color: grey[500],
    height: '2.8rem',
    width: '2.8rem',
  },
  folderOpen: { color: green[500] },
  header: {
    color: ssMainBlue,
    fontSize: '2.4rem',
    marginRight: '.6rem',
  },
  inbox: {
    color: noMessagesGrey,
    height: '15rem',
    margin: '0 auto',
    width: '15rem',
  },
  locked: { color: deepOrange[300] },
  loginBottomNav: {
    color: 'inherit',
    marginBottom: '.5rem',
  },
  logo: {
    height: '8rem',
    width: '15rem',
  },
  overdue: { color: red[500] },
  ready: { /* color: green500 */ },
  settings: { marginRight: '1rem' },
  submitted: { color: ssGreen },
  tooltipIcon: { color: ssMainBlue },
  vertDots: { /* color: deepOrange500 */ },
  warning: { color: errorColor },
};

export const iconSize = {
  large: {
    height: '11rem',
    width: '11rem',
  },
  loginBottomNav: {
    height: '3rem',
    width: '3rem',
  },
  medium: {
    height: '5rem',
    width: '5rem',
  },
  mediumLarge: {
    height: '3.5rem',
    width: '3.5rem',
  },
  mediumSmall: {
    height: '2rem',
    width: '2rem',
  },
  small: {
    height: '1.4rem',
    width: '1.4rem',
  },
  xSmall: {
    height: '1.2rem',
    width: '1.2rem',
  },
};

export const tooltipStyle = { textTransform: 'capitalize' };
