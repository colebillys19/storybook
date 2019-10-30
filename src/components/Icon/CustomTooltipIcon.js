import React from 'react';
import T from 'prop-types';
import { StyledTooltip } from './styles/CustomTooltipIcon.styles';

const CustomTooltipIcon = ({
  Icon,
  iconProps,
  interactiveTooltip,
  placement,
  TooltipContent,
  ...restProps
}) => {
  const WrappedComponent = typeof Icon === 'function' ? <Icon {...iconProps} /> : Icon;
  if (!TooltipContent) return WrappedComponent;
  return (
    <StyledTooltip
      interactive={interactiveTooltip}
      placement={placement}
      title={TooltipContent}
      {...restProps}
    >
      {WrappedComponent}
    </StyledTooltip>
  );
};

CustomTooltipIcon.propTypes = {
  Icon: T.oneOfType([T.func, T.element]).isRequired,
  iconProps: T.object,
  interactiveTooltip: T.bool,
  placement: T.string,
  TooltipContent: T.oneOfType([T.element, T.node]).isRequired,
};

CustomTooltipIcon.defaultProps = { placement: 'right-start' };

export default CustomTooltipIcon;
