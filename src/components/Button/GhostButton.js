/**
*
* GhostButton
* @description Main Ghost Button used throughout the Silver Site
* API Usage: {
*   Icon: (SVG) Icon to render if provided. Icons should be selected and styled through the
*         iconDictionary before reaching this component.
*   label: Button label
*   onClick: onClick handler
*   styling: Styling object to override default styles.
* }
*/
import styled from 'styled-components';
import {
  greyBorder,
  msLightGrey,
  ssDarkGrey,
} from 'utils/defaultStyleHelper';
import SecondaryButton from './SecondaryButton';

const GhostButton = styled(SecondaryButton)`
  &:hover {
    background-color: ${msLightGrey};
  }
  background-color: white;
  border: ${greyBorder};
  color: ${ssDarkGrey};
`;

export default GhostButton;
