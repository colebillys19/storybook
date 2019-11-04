import React from 'react';
import T from 'prop-types';
import styled from 'styled-components';
import BaseButton from './BaseButton';
import TooltipButton from './TooltipButton';

/**
 * Button used to display flat icon.
 */
const FlatIconButton = styled(({ tooltipText, ...restProps }) => {
  if (tooltipText) return <TooltipButton tooltipText={tooltipText} {...restProps} />;
  return <BaseButton {...restProps} />;
})`
  &:hover {
    background-color: transparent;
  }
  &:active {
    box-shadow: none;
  }
  background-color: transparent;
  box-shadow: none;
`;

FlatIconButton.propTypes = {
  component: T.func,
  disableFocusRipple: T.bool,
  disableRipple: T.bool,
  href: T.string,
  Icon: T.oneOfType([T.object, T.func]).isRequired,
  label: T.oneOfType([T.string, T.element]),
  onClick: T.func.isRequired,
  target: T.string,
  to: T.string,
};

export default FlatIconButton;
