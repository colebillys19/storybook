/**
*
* TooltipIcon
* @description Renders an Icon that can display a custom Tooltip.
*/

import React from 'react';
import T from 'prop-types';
import { StyledTooltip } from './styles/icon.styles';

const TooltipIcon = ({
  Icon,
  iconProps,
  Tooltip,
  ...restProps
}) => {
  const Component = typeof Icon === 'function' ? <Icon {...iconProps} /> : Icon;
  if (!Tooltip) return Component;
  const TooltipContent = typeof Tooltip === 'function' ? <Tooltip /> : Tooltip;
  return (
    <StyledTooltip
      placement="right-start"
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
  Tooltip: T.oneOfType([T.func, T.element]),
};

export default TooltipIcon;
