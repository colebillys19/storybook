/**
*
* GhostModalButton
* @description Ghost Modal Button used throughout the Silver Site
* API Usage: {
*   Icon: (SVG) Icon to render if provided. Icons should be selected and styled through the
*         iconDictionary before reaching this component.
*   label: Button label
*   onClick: onClick handler
*   styling: Styling object to override default styles.
* }
*/
import styled from 'styled-components';
import GhostButton from './GhostButton';

const GhostModalButton = styled(GhostButton)`
  font-size: 1.1rem;
`;

export default GhostModalButton;
