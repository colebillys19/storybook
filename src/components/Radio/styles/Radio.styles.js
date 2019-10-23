import styled from 'styled-components';
import FormControlLabel from '@material-ui/core/FormControlLabel';
import Radio from '@material-ui/core/Radio';
import { msBrightPurple } from 'utils/defaultStyleHelper';

export const StyledFormControlLabel = styled(FormControlLabel)`
  span {
    font-size: 1.4rem;
  }
  margin-left: 0
`;

export const StyledRadioButton = styled(Radio)`
  padding: 0.5rem;
  &:hover {
    color: ${msBrightPurple};
  }
  &.checked {
    color: ${msBrightPurple};
  }
`;
