import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';
import FormHelperText from '@material-ui/core/FormHelperText';

import { inputFocusedBorder } from '../../../utils/defaultStyleHelper';

export const StyledErrorText = styled(FormHelperText)`
  font-size: 1.2rem;
  margin: 0.3rem 0rem 0rem 2.5rem;
`;

export const BaseTextInput = styled(TextField)`
  margin: 0rem 1rem;
  min-width: 20rem;

  .label {
    font-size: 1.4rem;
    margin-left: .5rem;
  }

  .helper {
    font-size: 1.2rem;
    margin-top: 0.5rem;
  }

  .base-input {
    background: white;
    border-radius: .5rem;
    font-size: 1.4rem;
    height: 4rem;
    width: 100%;

    &.focused .outline {
      border: ${inputFocusedBorder};
    };
  }
`;
