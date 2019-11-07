import React from 'react';
import T from 'prop-types';
import { StyledTooltip } from './styles/TooltipIcon.styles';

/**
 * Use `TooltipIcon` when tooltip content is needed on hover of an icon.
 */
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
   * The tooltip placement.
   */
  placement: T.string,
  tooltipText: T.string.isRequired,
};

TooltipIcon.defaultProps = { placement: 'right-start' };

export default TooltipIcon;
