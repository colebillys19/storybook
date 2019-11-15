import React from 'react';
import styled from 'styled-components';

import AnimatedLabelInput from '../AnimatedLabelInput';
import AnimatedLabelInputDocs from '../docs/AnimatedLabelInput.docs.mdx';

export default {
  parameters: { component: AnimatedLabelInput, docs: { page: AnimatedLabelInputDocs } },
  title: 'Inputs|AnimatedLabelInput',
};

export const defaultStory = () => {
  const StoryWrapper = styled.div` padding-top: 1.3rem `;
  return (
    <StoryWrapper>
      <AnimatedLabelInput label="label text" />
    </StoryWrapper>
  );
};

defaultStory.story = { name: 'default' };
