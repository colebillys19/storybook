/**
*
* SpecialPrimaryButton
* @description Primary Special Button used throughout the Silver Site
* API Usage: {
*   Icon: (SVG) Icon to render if provided. Icons should be selected and styled through the
*         iconDictionary before reaching this component.
*   label: Button label
*   onClick: onClick handler
*   styling: Styling object to override default styles.
* }
*/
import styled from 'styled-components';
import { ssGreen, ssGreenHover } from '../../shared/defaultStyleHelper';
import BaseButton from './BaseButton';

const SpecialPrimaryButton = styled(BaseButton)`
  &:hover {
    background-color: ${ssGreenHover};
  };
  background-color: ${ssGreen};
  color: white;
  margin: 2rem 0.5rem;
  padding: 0.5rem 1.5rem;
  width: 20rem;
`;

export default SpecialPrimaryButton;
