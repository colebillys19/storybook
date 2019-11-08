import React, { Fragment } from 'react';
import styled from 'styled-components';
import { action } from '@storybook/addon-actions';
import { boolean, text, withKnobs } from '@storybook/addon-knobs/react';

import BaseExpansionPanelDocs from '../docs/BaseExpansionPanel.docs.mdx';
import BaseExpansionPanel from '../BaseExpansionPanel';
import iconDictionary from '../../../utils/iconDictionary';

// eslint-disable-next-line
const contentText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const ImageWrapper = styled.div`
  align-items: center;
  background-color: #f0f0f0;
  border: 0.2rem solid #1f1f1f;
  display: flex;
  margin-right: 2rem;
`;

export default {
  decorators: [withKnobs],
  parameters: {
    component: BaseExpansionPanel,
    docs: { page: BaseExpansionPanelDocs },
  },
  title: 'Miscellaneous|BaseExpansionPanel',
};

export const defaultStory = () => (
  <BaseExpansionPanel
    content={text('Content Text', contentText)}
    disabled={boolean('Disabled', false)}
    onChange={action('onChange')}
    primarySummaryText={text('Primary Summary Text', 'Primary Summary Text')}
  />
);

defaultStory.story = { name: 'default' };

export const secondaryTextStory = () => (
  <BaseExpansionPanel
    content={text('Content Text', contentText)}
    disabled={boolean('Disabled', false)}
    onChange={action('onChange')}
    primarySummaryText={text('Primary Summary Text', 'Primary Summary Text')}
    secondarySummaryText={text(
      'Secondary Summary Text',
      'secondary summary text'
    )}
  />
);

secondaryTextStory.story = { name: 'with secondary text' };

export const imageStory = () => {
  const content = (
    <Fragment>
      <ImageWrapper>{iconDictionary('image', 'large')}</ImageWrapper>
      <div>{text('Content Text', contentText)}</div>
    </Fragment>
  );
  return (
    <BaseExpansionPanel
      content={content}
      disabled={boolean('Disabled', false)}
      onChange={action('onChange')}
      primarySummaryText={text('Primary Summary Text', 'Primary Summary Text')}
    />
  );
};

imageStory.story = { name: 'with image' };

export const defaultExpandedStory = () => (
  <BaseExpansionPanel
    content={text('Content Text', contentText)}
    defaultExpanded
    disabled={boolean('Disabled', false)}
    onChange={action('onChange')}
    primarySummaryText={text('Primary Summary Text', 'Primary Summary Text')}
  />
);

defaultExpandedStory.story = { name: 'default expanded' };
