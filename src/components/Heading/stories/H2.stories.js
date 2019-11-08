import React from 'react';
import styled from 'styled-components';
import { withKnobs, select } from '@storybook/addon-knobs/react';
import { text } from '@storybook/addon-knobs';

import HeadingDocs from '../docs/Heading.docs.mdx';
import { headingColorOptions } from '../../../utils/storyConstants';
import { msDarkGrey } from '../../../utils/defaultStyleHelper';
import H2 from '../H2';

export default {
  decorators: [withKnobs],
  parameters: { component: H2, docs: { page: HeadingDocs } },
  title: 'Headings|H2',
};

const StyledH2 = styled(H2)`
  color: ${({ color }) => color};
  margin-left: 1.7rem;
`;

export const defaultStory = () => (
  <StyledH2 color={select('Color', headingColorOptions, msDarkGrey)}>
    {text('Text', 'Header Text')}
  </StyledH2>
);

defaultStory.story = { name: 'default' };
