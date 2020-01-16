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
