import React from 'react';
import T from 'prop-types';

import { StyledBaseButton } from './styles/TextButton.styles';

const TextButton = (props) => <StyledBaseButton {...props} />;

TextButton.defaultProps = {
  disableFocusRipple: true,
  disableRipple: true,
};

TextButton.propTypes = {
  component: T.func,
  disableFocusRipple: T.bool,
  disableRipple: T.bool,
  href: T.string,
  Icon: T.oneOfType([T.object, T.func]),
  label: T.oneOfType([T.string, T.element]).isRequired,
  onClick: T.func.isRequired,
  target: T.string,
  to: T.string,
};

export default TextButton;
