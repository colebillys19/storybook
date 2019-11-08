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

BaseButton.propTypes = {
  disabled: T.bool,
  disableFocusRipple: T.bool,
  disableRipple: T.bool,
  /**
   * To be used when a button is wrapped in a Material UI tooltip component.
   * Use the `ForwardRef` helper component in conjunction with this prop.
   */
  forwardedRef: T.oneOfType([
    T.func,
    T.shape({ current: T.instanceOf(Element) }),
  ]),
  /**
   * Icon to be displayed within the button.
   */
  Icon: T.oneOfType([T.object, T.func]),
  /**
   * String to be displayed within the button.
   */
  label: T.oneOfType([T.string, T.element]).isRequired,
  /**
   * Function to be run when a user clicks the button.
   */
  onClick: T.func.isRequired,
};

BaseButton.defaultProps = {
  disabled: false,
  disableFocusRipple: true,
  disableRipple: true,
};

export default BaseButton;
