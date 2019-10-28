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
  enterDelay: T.number,
  placement: T.string,
  tooltipText: T.string.isRequired,
};

export default TooltipButton;
