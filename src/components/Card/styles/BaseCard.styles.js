import styled from 'styled-components';
import Card from '@material-ui/core/Card';

import {
  borderStyle,
  borderWidth,
  msBrightPurple,
} from '../../../utils/defaultStyleHelper';

export const StyledCard = styled(Card)`
  border-radius: 0;
  border-top: ${({ color }) => color || msBrightPurple};
  border-top-width: ${borderWidth};
  border-top-style: ${borderStyle};
  box-shadow: none;
  padding: 0rem 2rem;
  width: ${({ width }) => width || 'max-content'};
`;

export const StyledH1 = styled.h1`
  margin: 1rem 0;
`;
