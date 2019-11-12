import React from 'react';
import T from 'prop-types';

import { StyledBaseButton } from './styles/TextButton.styles';

const TextButton = (props) => <StyledBaseButton {...props} />;

TextButton.propTypes = {
  disabled: T.bool,
  disableFocusRipple: T.bool,
  disableRipple: T.bool,
  /**
   * String to be displayed within the button.
   */
  label: T.oneOfType([T.string, T.element]).isRequired,
  /**
   * Function to be run when a user clicks the button.
   */
  onClick: T.func.isRequired,
};

TextButton.defaultProps = {
  disabled: false,
  disableFocusRipple: true,
  disableRipple: true,
};

export default TextButton;
