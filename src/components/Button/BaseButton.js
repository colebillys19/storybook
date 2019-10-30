/**
*
* BaseButton
* @description Button used as a base to create Main, Special, and Modal buttons
* API Usage: {
*   classes: (object) classes object created by Main, Special, or Modal buttons.
*            The classes targets which Material-UI nested component to overwrite styling
*   className: (string) the assigned className. If overwriting styles using styled-components,
*               className must be included in order for the component to apply the proper styling.
*   Icon: (SVG) Icon to render if provided. Icons should be selected and styled through the
*         iconDictionary before reaching this component.
*   label: Button label
*   onClick: onClick handler
*   styling: Styling object to override default styles. Only applies to the root styling.
* }
*/

import React from 'react';
import T from 'prop-types';

import Cancel from '../../svg/Cancel';
import ConditionalRender from '../../utils/ConditionalRender';
import StyledBaseButton from './styles/BaseButton.styles';

/**
 * Use `BaseButton` when a button is needed.
 */
const BaseButton = ({
  disableFocusRipple,
  disableRipple,
  forwardedRef,
  Icon,
  label,
  onClick,
  ...restProps
}) => (
  <StyledBaseButton
    ref={forwardedRef}
    classes={{ label: 'label' }}
    disableFocusRipple={disableFocusRipple}
    disableRipple={disableRipple}
    onClick={onClick}
    variant="contained"
    {...restProps}
  >
    <ConditionalRender Component={Icon || Cancel} shouldRender={!!Icon} />
    {label}
  </StyledBaseButton>
);

/* eslint-disable react/default-props-match-prop-types */
BaseButton.defaultProps = {
  disableFocusRipple: true,
  disableRipple: true,
  label: '',
};

/* eslint-enable react/default-props-match-prop-types */
BaseButton.propTypes = {
  /**
   * The component used for the root node. Either a string to use a DOM element or a component.
   */
  component: T.func,
  /**
   * If true, the button will be disabled.
   */
  disabled: T.bool,
  /**
   * If true, the keyboard focus ripple will be disabled. disableRipple must also be true.
   */
  disableFocusRipple: T.bool,
  /**
   * If true, the ripple effect will be disabled.
   */
  disableRipple: T.bool,
  /**
   * Used to wrap function components in React's forwardRef method to be used when implementing material UI tooltips.
   */
  forwardedRef: T.func,
  /**
   * The URL to link to when the button is clicked. If defined, an element will be used as the root node.
   */
  href: T.string,
  /**
   * Icon to render if provided. Icons should be selected and styled through the iconDictionary.
   */
  Icon: T.oneOfType([T.object, T.func]),
  /**
   * The Button label.
   */
  label: T.oneOfType([T.string, T.element]).isRequired,
  /**
   * Callback function fired during a click event.
   */
  onClick: T.func.isRequired,
  /**
   *
   */
  target: T.string,
  /**
   *
   */
  to: T.string,
};

export default BaseButton;
