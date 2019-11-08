import React from 'react';
import styled from 'styled-components';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { text } from '@storybook/addon-knobs';

import HeadingDocs from '../docs/Heading.docs.mdx';
import { headingColorOptions } from '../../../utils/storyConstants';
import { msDarkGrey } from '../../../utils/defaultStyleHelper';
import H3 from '../H3';

export default {
  decorators: [withKnobs],
  parameters: { component: H3, docs: { page: HeadingDocs } },
  title: 'Headings|H3',
};

const StyledH3 = styled(H3)`
  color: ${({ color }) => color};
  margin-left: 1.7rem;
`;

export const defaultStory = () => (
  <StyledH3 color={select('Color', headingColorOptions, msDarkGrey)}>
    {text('Text', 'Header Text')}
  </StyledH3>
);

defaultStory.story = { name: 'default' };
