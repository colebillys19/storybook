import styled from 'styled-components';

import BaseTextInput from '../BaseTextInput';

export const StyledBaseTextInput = styled(BaseTextInput)`
  & input::-webkit-outer-spin-button,
  & input::-webkit-inner-spin-button {
      -webkit-appearance: none;
      margin: 0;
  }

  & input[type=number] {
      -moz-appearance:textfield; // Firefox
  }
`;
