import React from 'react';
import T from 'prop-types';

import BaseButton from './BaseButton';
import ForwardRef from '../../utils/ForwardRef';
import { StyledTooltip } from './styles/TooltipButton.styles';

const TooltipButton = (props) => {
  const {
    enterDelay,
    placement,
    tooltipText,
    ...restProps
  } = props;
  return (
    <StyledTooltip
      enterDelay={enterDelay}
      placement={placement}
      title={tooltipText}
    >
      <ForwardRef Component={BaseButton} {...restProps} />
    </StyledTooltip>
  );
};

TooltipButton.defaultProps = {
  disableFocusRipple: true,
  disableRipple: true,
  enterDelay: 100,
  placement: 'top',
};

TooltipButton.propTypes = {
  component: T.func,
  disabled: T.bool,
  disableFocusRipple: T.bool,
  disableRipple: T.bool,
  enterDelay: T.number,
  forwardedRef: T.oneOfType([T.func, T.shape({ current: T.instanceOf(Element) })]),
  href: T.string,
  icon: T.oneOfType([T.object, T.func]),
  label: T.oneOfType([T.string, T.element]).isRequired,
  onClick: T.func.isRequired,
  placement: T.string,
  target: T.string,
  to: T.string,
  tooltipText: T.string.isRequired,
};

export default TooltipButton;
