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
 * Use `IconButton` when you need to use an icon as a button.
 *
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
   * Override or extend the styles applied to the component.
   */
  classes: T.object,
  /**
   * The color of the component.
   * It supports those theme colors that make sense for this component.
   */
  color: T.oneOf(['default', 'inherit', 'primary', 'secondary']),
  /**
   * If true, the button will be disabled.
   */
  disabled: T.bool,
  /**
   * If true, the keyboard focus ripple will be disabled.
   * disableRipple must also be true.
   */
  disableFocusRipple: T.bool,
  /**
   * If true, the ripple effect will be disabled.
   */
  disableRipple: T.bool,
  /**
   * If given, uses a negative margin to counteract the padding on one side
   * (this is often helpful for aligning the left or right side of the icon with
   * content above or below, without ruining the border size and shape).
   */
  edge: T.oneOf(['start', 'end', false]),
  /**
   * Callback triggered during an onClick event.
   */
  onClick: T.func.isRequired,
  /**
   * The size of the button.
   * small is equivalent to the dense button styling.
   */
  size: T.oneOf(['small', 'medium']),
};

IconButtonComponent.defaultProps = {
  disabled: false,
  disableFocusRipple: false,
  edge: false,
  size: 'medium',
};

export default IconButtonComponent;
