/**
*
* PrimaryButton
* @description Main Primary Button used throughout the Silver Site
* API Usage: {
*   Icon: (SVG) Icon to render if provided. Icons should be selected and styled through the
*         iconDictionary before reaching this component.
*   label: Button label
*   onClick: onClick handler
*   styling: Styling object to override default styles.
* }
*/
import styled from 'styled-components';
import { msBrightPurple, msHoverPurple } from 'utils/defaultStyleHelper';
import BaseButton from './BaseButton';

const PrimaryButton = styled(BaseButton)`
  &:hover {
    background-color: ${msHoverPurple};
  };
  background-color: ${msBrightPurple};
  color: white;
`;

export default PrimaryButton;
