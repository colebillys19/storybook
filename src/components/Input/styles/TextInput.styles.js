import styled from 'styled-components';
import OutlinedInput from '@material-ui/core/OutlinedInput';

import { greyShadowAlt, inputFocusedBorder } from '../../../utils/defaultStyleHelper';

/**
 * Styling applied to BaseTextInput
 */

export const StyledBaseInput = styled(OutlinedInput)`
  background: white;
  border-radius: .5rem;
  display: inline-flex;
  font-size: 1.4rem;
  height: 4rem;
  width: 100%;

  &.focused .outline {
    border: ${inputFocusedBorder};
    box-shadow: ${greyShadowAlt};
  };
`;

export const StyledInputGroup = styled.div`
  margin: 0rem 1rem;
  min-width: 20rem;
`;

export const StyledLabel = styled.div`
  font-size: 1.3rem;
  margin-left: .5rem;
`;
