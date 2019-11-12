import React from 'react';
import T from 'prop-types';

import { StyledBaseButton } from './styles/SecondaryButton.styles';

const SecondaryButton = (props) => <StyledBaseButton {...props} />;

SecondaryButton.propTypes = {
  disabled: T.bool,
  disableFocusRipple: T.bool,
  disableRipple: T.bool,
  /**
   * Icon to be displayed within the button.
   */
  Icon: T.oneOfType([T.object, T.func]),
  /**
   * String to be displayed within the button.
   */
  label: T.oneOfType([T.string, T.element]).isRequired,
  /**
   * Function to be run when a user clicks the button.
   */
  onClick: T.func.isRequired,
};

SecondaryButton.defaultProps = {
  disabled: false,
  disableFocusRipple: true,
  disableRipple: true,
};

export default SecondaryButton;
