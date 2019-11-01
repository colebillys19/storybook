import styled from 'styled-components';

import { borderStyle, borderWidth, ssRed } from '../../../utils/defaultStyleHelper';
import TextButton from '../../Button/TextButton';

export const BannerWrapper = styled.section`
  align-items: center;
  background-color: white;
  border-top-color: ${ssRed};
  border-top-style: ${borderStyle};
  border-top-width: ${borderWidth};
  display: flex;
  min-height: 2.4rem;
  padding: 1.4rem;
`;

export const AlertButton = styled(TextButton)`
  display: relative;
  font-size: 1.4rem;
  margin: 0 0 0 0.4rem;
  bottom: 0.1rem;
`;

export const AlertText = styled.p`
  display: flex;
  align-items: center;
  margin: 0;
`;
