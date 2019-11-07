import styled from 'styled-components';
import Card from '@material-ui/core/Card';

import {
  borderStyle,
  borderWidth,
} from '../../../utils/defaultStyleHelper';

export const StyledCard = styled(Card)`
  border-radius: 0;
  border-top: ${({ color }) => color || null};
  border-top-width: ${({ color }) => color ? borderWidth : null};
  border-top-style: ${({ color }) => color ? borderStyle : null};
  width: ${({ width }) => width || 'max-content'};
`;

export const StyledH1 = styled.h1`
  margin: 0 0.5rem;
`;
