import React from 'react';
import T from 'prop-types';

import ConditionalRender from '../../utils/ConditionalRender';
import { StyledBaseButton } from './styles/BaseButton.styles';
import iconDictionary from '../../utils/iconDictionary';

const BaseButton = ({
  disabled,
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
    disabled={disabled}
    disableFocusRipple={disableFocusRipple}
    disableRipple={disableRipple}
    onClick={onClick}
    variant="contained"
    {...restProps}
  >
    <ConditionalRender
      Component={Icon || iconDictionary('cancel', 'mediumSmall', 'button')}
      shouldRender={!!Icon}
    />
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
   * Ref passed down from parent Tooltip component (if button is child of a tooltip).
   */
  forwardedRef: T.oneOfType([
    T.func,
    T.shape({ current: T.instanceOf(Element) }),
  ]),
  /**
   * The URL to link to when the button is clicked.
   * If defined, an element will be used as the root node.
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
