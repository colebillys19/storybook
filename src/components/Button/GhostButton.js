import React from 'react';
import T from 'prop-types';

import { StyledBaseButton } from './styles/GhostButton.styles';

const GhostButton = (props) => <StyledBaseButton {...props} />;

GhostButton.defaultProps = {
  disableFocusRipple: true,
  disableRipple: true,
};

GhostButton.propTypes = {
  component: T.func,
  disableFocusRipple: T.bool,
  disableRipple: T.bool,
  href: T.string,
  icon: T.oneOfType([T.object, T.func]),
  label: T.oneOfType([T.string, T.element]).isRequired,
  onClick: T.func.isRequired,
  target: T.string,
  to: T.string,
};

export default GhostButton;
