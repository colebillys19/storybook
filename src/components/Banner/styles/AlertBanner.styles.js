import styled from 'styled-components';

import { borderStyle, borderWidth, ssRed } from '../../../utils/defaultStyleHelper';
import TextButton from '../../Button/TextButton';

export const Wrapper = styled.section`
  align-items: center;
  background-color: white;
  border-top-color: ${ssRed};
  border-top-style: ${borderStyle};
  border-top-width: ${borderWidth};
  display: flex;
  min-height: max-content;
  padding: 2rem;
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
