import React from 'react';
import T from 'prop-types';

import { StyledBaseButton } from './styles/TextButton.styles';

const TextButton = (props) => <StyledBaseButton {...props} />;

TextButton.defaultProps = {
  disableFocusRipple: true,
  disableRipple: true,
};

TextButton.propTypes = {
  disabled: T.bool,
  disableFocusRipple: T.bool,
  disableRipple: T.bool,
  /**
   * To be used when a button is wrapped in a Material UI tooltip component.
   * Use the `ForwardRef` helper component in conjunction with this prop.
   */
  forwardedRef: T.oneOfType([T.func, T.shape({ current: T.instanceOf(Element) })]),
  /**
   * String to be displayed within the button.
   */
  label: T.oneOfType([T.string, T.element]).isRequired,
  /**
   * Function to be run when a user clicks the button.
   */
  onClick: T.func.isRequired,
};

export default TextButton;
