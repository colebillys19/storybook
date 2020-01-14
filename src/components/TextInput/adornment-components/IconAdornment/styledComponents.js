import styled from 'styled-components';
import IconButton from '@material-ui/core/IconButton';

export const IconWrapper = styled.div`
  align-items: center;
  display: flex;
  height: 3.1rem;
  justify-content: center;
  margin: ${({ position }) => position === 'start' ? '0 -1.6rem 0 -1rem' : '0 -0.8rem 0 -1.6rem'};
  width: 3.1rem;
`;

export const StyledIconButton = styled(IconButton)`
  margin: ${({ position }) => position === 'start' ? '0 -1rem 0 -0.4rem' : '0 -0.4rem 0 -1rem'};
  &:hover {
    & svg {
      color: ${({ hoverColor }) => hoverColor || ''};
    }
  }
`;
