import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

import { msBrightPurple } from '../../../utils/defaultStyleHelper';

export const StyledTextField = styled(TextField)`
  & input {
    font-size: 1.4rem;
    padding: 1.4rem 2.1rem;
  }
  & .MuiFormLabel-root {
    font-size: 1.4rem;
  }
  & .MuiInputLabel-outlined {
    transform: translate(1rem, 1.5rem) scale(1);
  }
  & .MuiInputLabel-outlined.MuiInputLabel-shrink {
    transform: translate(0.5rem, 1rem) scale(0.75);
  }
  & .Mui-focused .MuiOutlinedInput-notchedOutline {
    border-color: ${({ color }) => color || msBrightPurple};
  }
`;
