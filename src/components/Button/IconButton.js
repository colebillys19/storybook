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

/**
 * Wraps a Material UI icon (SVG or Font Icon) to create a button.
 *
 * Styling works best if being wrapped, not in the IconButton props.
 *
 * Allows non-text buttons.
 */
const IconButtonComponent = (props) => (
  <IconButton {...props} />
);

IconButtonComponent.propTypes = {
  /**
   * The icon element.
   */
  children: T.element.isRequired,
  /**
   * If true, the button will be disabled.
   */
  disabled: T.bool,
  /**
   * Callback triggered during an onClick event.
   */
  onClick: T.func.isRequired,
};

IconButtonComponent.defaultProps = { disabled: false };

export default IconButtonComponent;
