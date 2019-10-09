import styled from 'styled-components';
import Card from '@material-ui/core/Card';
import BasePaper from '../../Paper/BasePaper';

import {
  borderStyle,
  borderWidth,
  ssLightBlue,
} from '../../../shared/defaultStyles';

export const CardContainer = styled(BasePaper)`
  border-radius: 0;
  box-shadow: none;
  width: 100%;
  .card {
    align-items: center;
    border-radius: 0;
    box-shadow: none;
    display: flex;
    flex-direction: row;
    height: 100%;
    justify-content: space-between;
  }
`;

export const StyledCard = styled(Card)`
  border-radius: 0;
  border-top: ${({ color }) => color || ssLightBlue};
  border-top-width: ${borderWidth};
  border-top-style: ${borderStyle};
  box-shadow: none;
  padding: 0rem 2rem;
  width: ${({ width }) => width || '40%'};
`;

export const TitleCard = styled(StyledCard)`
  align-items: center;
  display: flex;
  flex-direction: row;
  height: 7rem;
  justify-content: space-between;
  margin 1rem 0;
  width: 100%;
`;
