/**
* TextButton
* @description Text button without button shadow or ripple effects
* API Usage: {
*   Icon: (SVG) Icon to render if provided. Icons should be selected and styled through the
*         iconDictionary before reaching this component.
*   label: Text button label
*   onClick: onClick handler
* }
*/

import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';
import { ssLightBlue, ssMainBlueHover } from 'utils/defaultStyleHelper';
import BaseButton from './BaseButton';

const TextButton = styled(BaseButton)`
  &:active {
    box-shadow: none;
  };
  &:hover {
    background: transparent;
    box-shadow: none;
    color: ${ssMainBlueHover};
    text-decoration: underline;
  };
  background: transparent;
  color: ${ssLightBlue};
  font-size: 1.2rem;
  margin: .2rem 1rem;
  padding: 0;
  text-decoration: underline;
  text-transform: none;
`;

/* eslint-disable react/default-props-match-prop-types */
TextButton.defaultProps = {
  disableFocusRipple: true,
  disableRipple: true,
  label: '',
};

/* eslint-enable react/default-props-match-prop-types */
TextButton.propTypes = {
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

export default TextButton;
