
/**
*
* SecondaryButton
* @description Main Secondary Button used throughout the Silver Site
* API Usage: {
*   Icon: (SVG) Icon to render if provided. Icons should be selected and styled through the
*         iconDictionary before reaching this component.
*   label: Button label
*   onClick: onClick handler
*   styling: Styling object to override default styles.
* }
*/
import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';
import {
  msBrightPurple,
  msLightGrey,
  ssGreyHover,
} from 'utils/defaultStyleHelper';
import PrimaryButton from './PrimaryButton';

const SecondaryButton = styled(PrimaryButton)`
  &:hover {
    background-color: ${ssGreyHover};
  }
  background-color: ${msLightGrey};
  color: ${msBrightPurple};
`;

/* eslint-disable react/default-props-match-prop-types */
SecondaryButton.defaultProps = {
  disableFocusRipple: true,
  disableRipple: true,
  label: '',
};

/* eslint-enable react/default-props-match-prop-types */
SecondaryButton.propTypes = {
  component: T.func,
  disableFocusRipple: T.bool,
  disableRipple: T.bool,
  href: T.string,
  Icon: T.oneOfType([T.object, T.func]),
  label: T.oneOfType([T.string, T.element]).isRequired,
  onClick: T.func.isRequired,
  target: T.string,
  to: T.string,
};

export default SecondaryButton;
