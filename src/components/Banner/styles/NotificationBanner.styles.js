import styled from 'styled-components';

import {
  borderStyle,
  borderWidth,
  muiBlue,
  ssRed,
} from '../../../utils/defaultStyleHelper';
import TextButton from '../../Button/TextButton';

export const BannerWrapper = styled.section`
  align-items: center;
  background-color: white;
  border-top-color: ${({ isAlert }) => (isAlert ? ssRed : muiBlue)};
  border-top-style: ${borderStyle};
  border-top-width: ${borderWidth};
  display: flex;
  min-height: 2.4rem;
  padding: 1.4rem 0;
`;

export const NotificationButton = styled(TextButton)`
  color: ${muiBlue}
  display: relative;
  font-size: 1.4rem;
  margin: 0 0 0 0.4rem;
  bottom: 0.1rem;
`;

export const NotificationText = styled.p`
  display: flex;
  align-items: center;
  margin: 0 1.9rem;
  min-height: 2.4rem;
`;
