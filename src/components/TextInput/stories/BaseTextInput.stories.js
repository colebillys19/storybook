import React from 'react';
import styled from 'styled-components';

import BaseTextInput from '../BaseTextInput';
import BaseTextInputDocs from '../docs/BaseTextInput.docs.mdx';

export default {
  parameters: { component: BaseTextInput, docs: { page: BaseTextInputDocs } },
  title: 'Inputs|BaseTextInput',
};

export const defaultStory = () => {
  const StoryWrapper = styled.div` padding-top: 0.7rem `;
  return (
    <StoryWrapper>
      <BaseTextInput label="label text" />
    </StoryWrapper>
  );
};

defaultStory.story = { name: 'default' };
