import React from 'react';
import T from 'prop-types';

import { StyledBaseButton } from './styles/SecondaryButton.styles';

const SecondaryButton = (props) => <StyledBaseButton {...props} />;

SecondaryButton.propTypes = {
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

SecondaryButton.defaultProps = {
  disableFocusRipple: true,
  disableRipple: true,
};

export default SecondaryButton;
