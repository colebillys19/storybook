import styled from 'styled-components';

import {
  msBrightPurple,
  msDarkGrey,
  msMainGreen,
  muiOrange,
  muiRed,
  ssMainBlue,
  ssYellow,
} from './defaultStyleHelper';

export const iconOptions = {
  cancel: 'cancel',
  creditCard: 'creditCard',
  dollar: 'dollar',
  inbox: 'inbox',
  profile: 'profile',
  star: 'star',
  warning: 'warning',
};

export const iconSizeOptions = {
  large: 'large',
  medium: 'medium',
  mediumLarge: 'mediumLarge',
  mediumSmall: 'mediumSmall',
  small: 'small',
  xSmall: 'xSmall',
};

export const headingColorOptions = {
  msBrightPurple,
  msDarkGrey,
  msMainGreen,
};

export const enterDelayOptions = {
  '50ms': 50,
  '100ms': 100,
  '250ms': 200,
  '500ms': 500,
  '750ms': 750,
  '1000ms': 1000,
};

/* eslint-disable */
export const placementOptions = {
  'top-start': 'top-start',
  'top': 'top',
  'top-end': 'top-end',
  'right-start': 'right-start',
  'right': 'right',
  'right-end': 'right-end',
  'bottom-start': 'bottom-start',
  'bottom': 'bottom',
  'bottom-end': 'bottom-end',
  'left-start': 'left-start',
  'left': 'left',
  'left-end': 'left-end',
};
/* eslint-enable */

export const StyledLabel = styled.label`
  display: block;
  margin: 0 0 0.2rem 0.5rem;
`;

export const StyledSpan = styled.span`
  display: block;
  margin: 0.4rem 0 0 0.5rem;
  font-size: 1.2rem;
  color: #666;
`;

export const colorOptions = {
  msBrightPurple,
  msMainGreen,
  muiOrange,
  muiRed,
  ssMainBlue,
  ssYellow,
};

export const positionOptions = { end: 'end', start: 'start' };

export const variantOptions = { outlined: 'outlined', standard: 'standard' };
