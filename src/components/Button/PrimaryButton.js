import React from 'react';
import T from 'prop-types';

import { StyledBaseButton } from './styles/PrimaryButton.styles';

const PrimaryButton = (props) => <StyledBaseButton {...props} />;

PrimaryButton.propTypes = {
  component: T.func,
  disabled: T.bool,
  disableFocusRipple: T.bool,
  disableRipple: T.bool,
  forwardedRef: T.oneOfType([T.func, T.shape({ current: T.instanceOf(Element) })]),
  href: T.string,
  Icon: T.oneOfType([T.object, T.func]),
  label: T.oneOfType([T.string, T.element]).isRequired,
  onClick: T.func.isRequired,
  target: T.string,
  to: T.string,
};

PrimaryButton.defaultProps = {
  disableFocusRipple: true,
  disableRipple: true,
};

export default PrimaryButton;
