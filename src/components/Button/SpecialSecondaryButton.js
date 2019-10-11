/**
*
* SpecialSecondaryButton
* @description SecondarySpecial Button used throughout the Silver Site
* API Usage: {
*   Icon: (SVG) Icon to render if provided. Icons should be selected and styled through the
*         iconDictionary before reaching this component.
*   label: Button label
*   onClick: onClick handler
*   styling: Styling object to override default styles.
* }
*/
import styled from 'styled-components';
import { ssRed, ssRedHover } from '../../shared/defaultStyleHelper';
import SpecialPrimaryButton from './SpecialPrimaryButton';

const SpecialSecondaryButton = styled(SpecialPrimaryButton)`
  &:hover {
    background-color: ${ssRedHover};
  }
  background-color: ${ssRed};
`;

export default SpecialSecondaryButton;
