import React from 'react';
import T from 'prop-types';
import IconButton from '@material-ui/core/IconButton';

import { StyledTooltip } from './styles/TooltipButton.styles';

const RoundIconButton = (props) => {
  const {
    enterDelay,
    Icon,
    placement,
    tooltipText,
    ...restProps
  } = props;
  return (
    <StyledTooltip
      enterDelay={enterDelay}
      placement={placement}
      title={tooltipText}
    >
      <IconButton label="" {...restProps}>
        {Icon}
      </IconButton>
    </StyledTooltip>
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
  size: T.oneOf(['small', 'medium']),
  /**
   * String to be displayed within the tooltip.
   */
  tooltipText: T.string.isRequired,
};

RoundIconButton.defaultProps = {
  disabled: false,
  disableFocusRipple: false,
  disableRipple: false,
  edge: false,
  enterDelay: 100,
  placement: 'right',
  size: 'medium',
};

export default RoundIconButton;
