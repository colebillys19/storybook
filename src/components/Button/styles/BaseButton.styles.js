import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

export const StyledBaseButton = styled(Button)`
  align-items: center;
  box-shadow: none;
  display: inline-flex;
  font-size: 1.4rem;
  font-weight: 500;
  margin: 1rem;
  padding: 1rem 2.8rem;
  text-transform: none;
  &:active {
    box-shadow: none;
  }
  &.root {
    min-width: 0;
  }
`;

export const StyledCircularProgress = styled(CircularProgress)`
  color: inherit;
`;
