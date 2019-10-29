import React from 'react';
import T from 'prop-types';
import BaseButton from './BaseButton';
import ForwardRef from '../../utils/ForwardRef';

import { StyledTooltip } from './styles/TooltipButton.styles';

const TooltipButton = ({
  enterDelay,
  placement,
  tooltipText,
  ...restProps
}) => (
  <StyledTooltip
    enterDelay={enterDelay}
    placement={placement}
    title={tooltipText}
  >
    <ForwardRef Component={BaseButton} {...restProps} />
  </StyledTooltip>
);

TooltipButton.defaultProps = {
  enterDelay: 100,
  placement: 'top',
};

TooltipButton.propTypes = {
  /**
   * The number of milliseconds to wait before showing the tooltip.
   * This prop won't impact the enter touch delay.
   */
  enterDelay: T.number,
  /**
   * The Tooltip placement.
   */
  placement: T.string,
  /**
   * The Tooltip text. Zero-length titles string are never displayed.
   */
  tooltipText: T.string.isRequired,
};

export default TooltipButton;
