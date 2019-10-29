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
  /**
   * (SVG) Icon to render if provided. Icons should be selected and styled through the
   * iconDictionary before reaching this component.
   */
  Icon: T.oneOfType([T.func, T.element]).isRequired,
  /**
   * The props passed the Icon provided.
   */
  iconProps: T.object,
  /**
   * The content displayed when the tooltip is triggered.
   */
  placement: T.string,
  /**
   * The tooltip placement.
   */
  TooltipContent: T.oneOfType([T.element, T.node]),
};

TooltipIcon.defaultProps = { placement: 'right-start' };

export default TooltipIcon;
