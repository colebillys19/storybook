import React from 'react';
import T from 'prop-types';

import {
  StyledBaseButton,
  StyledTooltipButton,
} from './styles/FlatIconButton.styles';

const FlatIconButton = (props) => {
  const {
    enterDelay,
    placement,
    tooltipText,
    ...restProps
  } = props;
  if (tooltipText) {
    return (
      <StyledTooltipButton
        enterDelay={enterDelay}
        label=""
        placement={placement}
        tooltipText={tooltipText}
        {...restProps}
      />
    );
  }
  return <StyledBaseButton label="" {...restProps} />;
};

FlatIconButton.propTypes = {
  disabled: T.bool,
  disableFocusRipple: T.bool,
  disableRipple: T.bool,
  /**
   * The amount of time (milliseconds) between when a user mouses over the button
   * and when the tooltip is displayed.
   */
  enterDelay: T.number,
  /**
   * Icon to be displayed within the button.
   */
  Icon: T.oneOfType([T.object, T.func]).isRequired,
  /**
   * Function to be run when a user clicks the button.
   */
  onClick: T.func.isRequired,
  /**
   * Placement of the tooltip in relation to the button.
   * Choose from one of the following:
   * top-start, top, top-end, right-start, right, right-end,
   * bottom-start, bottom, bottom-end, left-start, left, left-end
   */
  placement: T.string,
  /**
   * String to be displayed within the tooltip.
   */
  tooltipText: T.string,
};

FlatIconButton.defaultProps = {
  disabled: false,
  disableFocusRipple: true,
  disableRipple: true,
  enterDelay: 100,
  placement: 'right',
};

export default FlatIconButton;
