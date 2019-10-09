/**
*
* SecondaryModalButton
* @description Secondary Modal Button used throughout the Silver Site
* API Usage: {
*   Icon: (SVG) Icon to render if provided. Icons should be selected and styled through the
*         iconDictionary before reaching this component.
*   label: Button label
*   onClick: onClick handler
*   styling: Styling object to override default styles.
* }
*/
import styled from 'styled-components';
import SecondaryButton from './SecondaryButton';

const SecondaryModalButton = styled(SecondaryButton)`
  font-size: 1.1rem;
`;

export default SecondaryModalButton;
