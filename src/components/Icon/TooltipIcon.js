import React from 'react';
import T from 'prop-types';
import { StyledTooltip } from './styles/TooltipIcon.styles';

const TooltipIcon = ({
  Icon,
  iconProps,
  placement,
  tooltipText,
  ...restProps
}) => {
  const WrappedIcon = typeof Icon === 'function' ? <Icon {...iconProps} /> : Icon;
  if (!tooltipText) return WrappedIcon;
  return (
    <StyledTooltip
      placement={placement}
      title={tooltipText}
      {...restProps}
    >
      {WrappedIcon}
    </StyledTooltip>
  );
};

TooltipIcon.propTypes = {
  Icon: T.oneOfType([T.func, T.element]).isRequired,
  iconProps: T.object,
  placement: T.string,
  tooltipText: T.string.isRequired,
};

TooltipIcon.defaultProps = { placement: 'right-start' };

export default TooltipIcon;
