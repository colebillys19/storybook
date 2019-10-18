/**
*
* TooltipIcon
* @description Renders an Icon that can display a custom Tooltip.
*/

import React from 'react';
import T from 'prop-types';
import { StyledTooltip } from './styles/TooltipIcon.styles';

const TooltipIcon = ({
  Icon,
  iconProps,
  TooltipContent,
  ...restProps
}) => {
  const Component = typeof Icon === 'function' ? <Icon {...iconProps} /> : Icon;
  if (!TooltipContent) return Component;
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
  TooltipContent: T.oneOfType([T.element, T.node]),
};

export default TooltipIcon;
