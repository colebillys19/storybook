import React from 'react';
import T from 'prop-types';
import { StyledTooltip } from './styles/TooltipIcon.styles';

const TooltipIcon = ({
  Icon,
  iconProps,
  placement,
  TooltipContent,
  ...restProps
}) => {
  const Component = typeof Icon === 'function' ? <Icon {...iconProps} /> : Icon;
  if (!TooltipContent) return Component;
  return (
    <StyledTooltip
      placement={placement}
      title={TooltipContent}
      {...restProps}
    >
      {Component}
    </StyledTooltip>
  );
};

TooltipIcon.propTypes = {
  Icon: T.oneOfType([T.func, T.element]).isRequired,
  iconProps: T.object,
  placement: T.string,
  TooltipContent: T.oneOfType([T.element, T.node]),
};

TooltipIcon.defaultProps = { placement: 'right-start' };

export default TooltipIcon;
