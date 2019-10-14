import styled from 'styled-components';
import Button from '@material-ui/core/Button';
import CircularProgress from '@material-ui/core/CircularProgress';

/**
 * Styling applied to BaseButton
 */
const StyledBaseButton = styled(Button)`
  &:active {
    box-shadow: none;
  }
  align-items: center;
  box-shadow: none;
  display: inline-flex;
  font-size: 1.4rem;
  font-weight: 500;
  margin: 1rem;
  padding: 1rem 2.8rem;
`;

export const StyledCircularProgress = styled(CircularProgress)`
  color: inherit;
`;

export default StyledBaseButton;
