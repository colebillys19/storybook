import React from 'react';
import T from 'prop-types';
import IconButton from '@material-ui/core/IconButton';

const RoundIconButton = (props) => {
  const { icon } = props;
  return <IconButton label="" {...props}>{icon}</IconButton>;
};

RoundIconButton.propTypes = {
  disabled: T.bool,
  disableFocusRipple: T.bool,
  disableRipple: T.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one side
   * (this is often helpful for aligning the left or right side of the icon
   * with content above or below, without ruining the border size and shape).
   */
  edge: T.oneOf(['start', 'end', false]),
  /**
   * To be used when a button is wrapped in a Material UI tooltip component.
   * Use the `ForwardRef` helper component in conjunction with this prop.
   */
  forwardedRef: T.oneOfType([T.func, T.shape({ current: T.instanceOf(Element) })]),
  /**
   * Icon to be displayed within the button.
   */
  icon: T.oneOfType([T.object, T.func]).isRequired,
  /**
   * Function to be run when a user clicks the button.
   */
  onClick: T.func.isRequired,
  size: T.oneOf(['small', 'medium']),
};

RoundIconButton.defaultProps = {
  disableFocusRipple: false,
  edge: false,
  size: 'medium',
};

export default RoundIconButton;
