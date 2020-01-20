import styled from 'styled-components';
import TextField from '@material-ui/core/TextField';

import { typography } from '../../../utils/defaultStyleHelper';
import { getBorderColor } from '../helpers';

export const StyledTextField = styled(TextField)`
  background-color: white;
  border-radius: 0.5rem;
  border-radius: ${({ variant }) => variant === 'outlined' ? '0.5rem' : '0'};
  min-width: 17.3rem;
  opacity: ${({ disabled }) => disabled ? '0.5' : '1'};

  & .input-base:hover:before {
    border-bottom-color: ${({ color, error }) => getBorderColor(color, error)} !important;
  }

  & .input-base:after {
    border-bottom-color: ${({ color, error }) => getBorderColor(color, error)};
    transition: none;
  }

  & .input {
    font-size: ${typography.size.s2};
    font-family: ${typography.font.overpass};
    min-height: 4rem;
  
    padding: 0 1rem;
    &::-webkit-calendar-picker-indicator {
      display: none;
    }
  }

  & .input:focus + fieldset {
    border-color: ${({ color, error }) => getBorderColor(color, error)};
  }

  & * {
    transition: none;
  }
`;
