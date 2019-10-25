
/**
*
* SecondaryButton
* @description Main Secondary Button used throughout the Silver Site
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
  msBrightPurple,
  msLightGrey,
  ssGreyHover,
} from 'utils/defaultStyleHelper';
import PrimaryButton from './PrimaryButton';

const SecondaryButton = styled(PrimaryButton)`
  &:hover {
    background-color: ${ssGreyHover};
  }
  background-color: ${msLightGrey};
  color: ${msBrightPurple};
`;

export default SecondaryButton;
