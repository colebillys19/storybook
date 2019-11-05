import React from 'react';
import T from 'prop-types';
import IconButton from '@material-ui/core/IconButton';

const IconButtonComponent = (props) => (
  <IconButton {...props} />
);

IconButtonComponent.propTypes = {
  children: T.element.isRequired,
  classes: T.object,
  disabled: T.bool,
  disableFocusRipple: T.bool,
  disableRipple: T.bool,
  edge: T.oneOf(['start', 'end', false]),
  onClick: T.func.isRequired,
  size: T.oneOf(['small', 'medium']),
};

IconButtonComponent.defaultProps = {
  disableFocusRipple: false,
  edge: false,
  size: 'medium',
};

export default IconButtonComponent;
