import React from 'react';
import T from 'prop-types';

import {
  StyledBaseButton,
  StyledTooltipButton,
} from './styles/FlatIconButton.styles';

const FlatIconButton = (props) => {
  const { tooltipText, ...restProps } = props;
  if (tooltipText) {
    return (
      <StyledTooltipButton label="" tooltipText={tooltipText} {...restProps} />
    );
  }
  return <StyledBaseButton label="" {...props} />;
};

FlatIconButton.propTypes = {
  disabled: T.bool,
  disableFocusRipple: T.bool,
  disableRipple: T.bool,
  /**
   * Icon to be displayed within the button.
   */
  Icon: T.oneOfType([T.object, T.func]).isRequired,
  /**
   * Function to be run when a user clicks the button.
   */
  onClick: T.func.isRequired,
};

FlatIconButton.defaultProps = {
  disabled: false,
  disableFocusRipple: true,
  disableRipple: true,
};

export default FlatIconButton;
