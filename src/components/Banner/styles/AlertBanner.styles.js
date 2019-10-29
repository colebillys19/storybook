import styled from 'styled-components';

import { borderStyle, borderWidth, ssRed } from '../../../utils/defaultStyleHelper';
import TextButton from '../../Button/TextButton';

// For the styled component below and the height being smaller than the min-height.
// Ran into a problem/bug on IE11 where align-items doesn't work with min-height.
// After research how the work around:
// https://stackoverflow.com/questions/19371626/flexbox-not-centering-vertically-in-ie/25386261#25386261
// https://github.com/philipwalton/flexbugs/issues/231

export const Wrapper = styled.section`
  align-items: center;
  background-color: white;
  border-top-color: ${ssRed};
  border-top-style: ${borderStyle};
  border-top-width: ${borderWidth};
  display: flex;
  height: 5rem;
  min-height: 7rem;
  padding: 1rem;
`;

export const AlertButton = styled(TextButton)`
  font-size: 1.4rem;
  line-height: 1.5rem;
  margin: 0 0 0 0.4rem;
  padding-bottom: 0.3rem;
`;

export const AlertText = styled.div`
  p {
    line-height: 2rem;
    margin: 0;
    width: 100%;
  }
  align-items: center;  
  display: flex;
  flex-wrap: wrap;
  text-align: left;
`;
