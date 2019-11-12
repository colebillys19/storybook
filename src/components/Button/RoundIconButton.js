import React from 'react';
import T from 'prop-types';
import IconButton from '@material-ui/core/IconButton';

const RoundIconButton = (props) => {
  const { Icon, ...restProps } = props;
  return (
    <IconButton label="" {...restProps}>
      {Icon}
    </IconButton>
  );
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
   * Icon to be displayed within the button.
   */
  Icon: T.oneOfType([T.object, T.func]).isRequired,
  /**
   * Function to be run when a user clicks the button.
   */
  onClick: T.func.isRequired,
  size: T.oneOf(['small', 'medium']),
};

RoundIconButton.defaultProps = {
  disabled: false,
  disableFocusRipple: false,
  disableRipple: false,
  edge: false,
  size: 'medium',
};

export default RoundIconButton;
