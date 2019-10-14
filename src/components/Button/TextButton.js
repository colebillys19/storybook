/**
* TextButton
* @description Text button without button shadow or ripple effects
* API Usage: {
*   Icon: (SVG) Icon to render if provided. Icons should be selected and styled through the
*         iconDictionary before reaching this component.
*   label: Text button label
*   onClick: onClick handler
* }
*/

import styled from 'styled-components';
import { ssLightBlue, ssMainBlueHover } from '../../shared/defaultStyleHelper';
import BaseButton from './BaseButton';

const TextButton = styled(BaseButton)`
  &:active {
    box-shadow: none;
  };
  &:hover {
    background: transparent;
    box-shadow: none;
    color: ${ssMainBlueHover};
    text-decoration: underline;
  };
  background: transparent;
  color: ${ssLightBlue};
  font-size: 1.2rem;
  margin: .2rem 1rem;
  padding: 0;
  text-decoration: underline;
  text-transform: none;
`;

export default TextButton;
