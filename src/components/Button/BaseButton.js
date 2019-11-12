import React, { Component } from 'react';
import T from 'prop-types';

import ConditionalRender from '../../utils/ConditionalRender';
import { StyledBaseButton } from './styles/BaseButton.styles';
import iconDictionary from '../../utils/iconDictionary';

// class component is utilized to enable mui tooltip functionality
/* eslint-disable react/prefer-stateless-function */
class BaseButton extends Component {
  render() {
    const {
      disabled,
      disableFocusRipple,
      disableRipple,
      Icon,
      label,
      onClick,
      ...restProps
    } = this.props;
    return (
      <StyledBaseButton
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
  }
}
/* eslint-enable react/prefer-stateless-function */

BaseButton.propTypes = {
  disabled: T.bool,
  disableFocusRipple: T.bool,
  disableRipple: T.bool,
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
