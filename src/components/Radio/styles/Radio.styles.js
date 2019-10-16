import styled from 'styled-components';
import Radio from '@material-ui/core/Radio';
import { ssLightBlue } from '../../../utils/defaultStyleHelper';

export const StyledRadioButton = styled(Radio)`
  &:hover {
    color: ${ssLightBlue};
  }

  &.checked {
    color: ${ssLightBlue};
  }
`;
