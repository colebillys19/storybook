/**
*
* PrimaryButton
* @description Main Primary Button used throughout the Silver Site
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
import { msBrightPurple, msHoverPurple } from 'utils/defaultStyleHelper';
import BaseButton from './BaseButton';

const PrimaryButton = styled(BaseButton)`
  &:hover {
    background-color: ${msHoverPurple};
  };
  background-color: ${msBrightPurple};
  color: white;
`;

/* eslint-disable react/default-props-match-prop-types */
PrimaryButton.defaultProps = {
  disableFocusRipple: true,
  disableRipple: true,
  label: '',
};

/* eslint-enable react/default-props-match-prop-types */
PrimaryButton.propTypes = {
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

export default PrimaryButton;
