/**
*
* PrimaryAsyncButton
* @description Async Button styled after the main primary button
* API Usage: {
*   Icon: (SVG) Icon to render if provided. Icons should be selected and styled through the
*         iconDictionary before reaching this component.
*   label: Button label
*   onClick: onClick handler
*   styling: Styling object to override default styles.
* }
*/
import styled from 'styled-components';
import { ssMainBlue, ssMainBlueHover } from '../../shared/defaultStyleHelper';
import BaseAsyncButton from './BaseAsyncButton';

const PrimaryAsyncButton = styled(BaseAsyncButton)`
  &:hover {
    background-color: ${ssMainBlueHover};
  };

  &.disabled {
    background-color: ${ssMainBlueHover};
    color: white;
  };
  
  background-color: ${ssMainBlue};
  color: white;
`;

export default PrimaryAsyncButton;
