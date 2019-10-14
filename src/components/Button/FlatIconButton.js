import React from 'react';
import styled from 'styled-components';
import BaseButton from './BaseButton';
import TooltipButton from './TooltipButton';

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
export default FlatIconButton;
