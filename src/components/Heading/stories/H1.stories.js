import React from 'react';
import styled from 'styled-components';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { text } from '@storybook/addon-knobs';

import HeadingDocs from '../docs/Heading.docs.mdx';
import { headingColorOptions } from '../../../utils/storyConstants';
import { msDarkGrey } from '../../../utils/defaultStyleHelper';
import H1 from '../H1';

export default {
  decorators: [withKnobs],
  parameters: { component: H1, docs: { page: HeadingDocs } },
  title: 'Headings|H1',
};

const StyledH1 = styled(H1)`
  color: ${({ color }) => color};
  margin-left: 1.7rem;
`;

export const defaultStory = () => (
  <StyledH1 color={select('Color', headingColorOptions, msDarkGrey)}>
    {text('Text', 'Header Text')}
  </StyledH1>
);

defaultStory.story = { name: 'default' };
