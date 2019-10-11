/**
*
* IconButton
* @description: Wraps a Material UI icon (SVG or Font Icon)
* to create a button. Styling works best if done directly on the icon
* being wrapped, not in the IconButton props.
* Use Case: Allows non-text buttons
*/

import React from 'react';
import T from 'prop-types';
import IconButton from '@material-ui/core/IconButton';

const IconButtonComponent = (props) => (
  <IconButton {...props} />
);

IconButtonComponent.propTypes = {
  children: T.element.isRequired,
  disabled: T.bool,
  onClick: T.func.isRequired,
};

IconButtonComponent.defaultProps = { disabled: false };

export default IconButtonComponent;
