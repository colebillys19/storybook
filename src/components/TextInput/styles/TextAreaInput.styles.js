import styled from 'styled-components';

import BaseTextInput from '../BaseTextInput';

export const StyledInput = styled(BaseTextInput)`
  & .multiline {
    padding: 0;
    & textarea {
      line-height: 1.4rem;
      padding: 1.5rem 1rem;
    }
  }
`;

export const StyledLabel = styled.label`
  display: block;
  margin: 0 0 0.2rem 0.5rem;
`;

export const StyledSpan = styled.span`
  display: block;
  margin: 0.4rem 0 0 0.5rem;
  font-size: 1.2rem;
  color: #666;
`;
