import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

import { msBrightPurple } from '../../../utils/defaultStyleHelper';

export const StyledTextField = styled(TextField)`
  & input {
    background-color: #fff;
    border-radius: 0.5rem;
    border: 0.1rem solid #b8b8b8;
    box-sizing: border-box;
    font-size: 1.4rem;
    min-height: 3.8rem;
    min-width: 18rem;
    padding: 1rem 1.2rem;
    &:hover {
      border-color: #1f1f1f;
    }
    &:focus {
      border-width: 0.2rem;
      border-color: ${({ color }) => color || msBrightPurple};
    }
  }
  & fieldset {
    border: none;
  }
  & .MuiFormLabel-root {
    font-size: 1.4rem;
  }
  & .MuiInputLabel-outlined {
    transform: translate(1.3rem, 1.2rem) scale(1);
  }
  & .MuiInputLabel-outlined.MuiInputLabel-shrink {
    color: ${({ color }) => color || msBrightPurple};
    transform: translate(0.7rem, -1.3rem) scale(0.75);
  }
`;
