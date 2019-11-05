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
  icon,
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
      Component={icon || iconDictionary('cancel', 'mediumSmall', 'button')}
      shouldRender={!!icon}
    />
    {label}
  </StyledBaseButton>
);

BaseButton.defaultProps = {
  disableFocusRipple: true,
  disableRipple: true,
};

BaseButton.propTypes = {
  component: T.func,
  disabled: T.bool,
  disableFocusRipple: T.bool,
  disableRipple: T.bool,
  forwardedRef: T.oneOfType([T.func, T.shape({ current: T.instanceOf(Element) })]),
  href: T.string,
  icon: T.oneOfType([T.object, T.func]),
  label: T.oneOfType([T.string, T.element]).isRequired,
  onClick: T.func.isRequired,
  target: T.string,
  to: T.string,
};

export default BaseButton;
