import React from 'react';
import T from 'prop-types';

import { StyledBaseButton, StyledTooltipButton } from './styles/FlatIconButton.styles';

const FlatIconButton = (props) => {
  const { tooltipText, ...restProps } = props;
  if (tooltipText) return <StyledTooltipButton tooltipText={tooltipText} {...restProps} />;
  return <StyledBaseButton label="" {...props} />;
};

FlatIconButton.defaultProps = {
  disableFocusRipple: true,
  disableRipple: true,
};

FlatIconButton.propTypes = {
  component: T.func,
  disabled: T.bool,
  disableFocusRipple: T.bool,
  disableRipple: T.bool,
  forwardedRef: T.oneOfType([T.func, T.shape({ current: T.instanceOf(Element) })]),
  href: T.string,
  icon: T.oneOfType([T.object, T.func]),
  label: T.oneOfType([T.string, T.element]),
  onClick: T.func.isRequired,
  target: T.string,
  to: T.string,
};

export default FlatIconButton;
