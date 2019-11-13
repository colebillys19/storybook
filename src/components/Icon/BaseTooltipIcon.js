import React from 'react';
import T from 'prop-types';
import { StyledTooltip } from './styles/BaseTooltipIcon.styles';

const BaseTooltipIcon = ({
  enterDelay,
  Icon,
  iconProps,
  placement,
  tooltipText,
  ...restProps
}) => {
  const WrappedIcon =
    typeof Icon === 'function' ? <Icon {...iconProps} /> : Icon;
  if (!tooltipText) return WrappedIcon;
  return (
    <StyledTooltip placement={placement} title={tooltipText} {...restProps}>
      {WrappedIcon}
    </StyledTooltip>
  );
};

BaseTooltipIcon.propTypes = {
  /**
   * The amount of time (milliseconds) between when a user mouses over the icon
   * and when the tooltip is displayed.
   */
  enterDelay: T.number,
  /**
   * (SVG) Icon to render if provided. Icons should be selected and styled through the
   * iconDictionary before reaching this component.
   */
  Icon: T.oneOfType([T.func, T.element]).isRequired,
  /**
   * The props passed to the Icon provided.
   */
  iconProps: T.object,
  /**
   * The tooltip placement.
   */
  placement: T.string,
  tooltipText: T.string.isRequired,
};

BaseTooltipIcon.defaultProps = {
  enterDelay: 100,
  placement: 'right',
};

export default BaseTooltipIcon;
