import React from 'react';
import T from 'prop-types';

import BaseButton from './BaseButton';
import ForwardRef from '../../utils/ForwardRef';
import { StyledTooltip } from './styles/TooltipButton.styles';

const TooltipButton = (props) => {
  const {
    enterDelay,
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
      <ForwardRef Component={BaseButton} {...restProps} />
    </StyledTooltip>
  );
};

TooltipButton.propTypes = {
  disabled: T.bool,
  disableFocusRipple: T.bool,
  disableRipple: T.bool,
  /**
   * The amount of time (milliseconds) between when a user mouses over the button
   * and when the tooltip is displayed.
   */
  enterDelay: T.number,
  /**
   * To be used when a button is wrapped in a Material UI tooltip component.
   * Use the `ForwardRef` helper component in conjunction with this prop.
   */
  forwardedRef: T.oneOfType([
    T.func,
    T.shape({ current: T.instanceOf(Element) }),
  ]),
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
  tooltipText: T.string.isRequired,
};

TooltipButton.defaultProps = {
  disabled: false,
  disableFocusRipple: true,
  disableRipple: true,
  enterDelay: 100,
  placement: 'top',
};

export default TooltipButton;
