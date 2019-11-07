import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  text,
  withKnobs,
} from '@storybook/addon-knobs/react';

import BaseExpansionPanel from '../BaseExpansionPanel';
import BaseExpansionPanelDetails from '../BaseExpansionPanelDetails';
import BaseExpansionPanelSummary from '../BaseExpansionPanelSummary';
import { ImageWrapper } from '../styles/BaseExpansionPanel.styles';
import iconDictionary from '../../../utils/iconDictionary';

// eslint-disable-next-line
const contentText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const ArrowDown = iconDictionary('arrowDown', 'mediumLarge');

export default {
  decorators: [withKnobs],
  parameters: { component: BaseExpansionPanel },
  title: 'Miscellaneous|BaseExpansionPanel',
};

export const defaultStory = () => {
  const ExpansionPanel = (
    <BaseExpansionPanel
      disabled={boolean('Disabled', false)}
      onChange={action('onChange')}
    >
      <BaseExpansionPanelSummary expandIcon={ArrowDown}>
        <span style={{ fontSize: '1.7rem', marginRight: '2.5rem' }}>
          {text('Expansion Panel Title', 'Expansion Panel Title')}
        </span>
      </BaseExpansionPanelSummary>
      <BaseExpansionPanelDetails>
        {text('Content Text', contentText)}
      </BaseExpansionPanelDetails>
    </BaseExpansionPanel>
  );
  return ExpansionPanel;
};

defaultStory.story = { name: 'default' };

export const secondaryText = () => {
  const ExpansionPanel = (
    <BaseExpansionPanel
      disabled={boolean('Disabled', false)}
      onChange={action('onChange')}
    >
      <BaseExpansionPanelSummary expandIcon={ArrowDown}>
        <span style={{ fontSize: '1.7rem', marginRight: '2.5rem' }}>
          {text('Expansion Panel Title', 'Expansion Panel Title')}
        </span>
        <span style={{ color: '#aaa' }}>
          {text('Secondary Text', 'Some Secondary Text')}
        </span>
      </BaseExpansionPanelSummary>
      <BaseExpansionPanelDetails>
        {text('Content Text', contentText)}
      </BaseExpansionPanelDetails>
    </BaseExpansionPanel>
  );
  return ExpansionPanel;
};

secondaryText.story = { name: 'with secondary text' };

export const imageStory = () => {
  const ExpansionPanel = (
    <BaseExpansionPanel
      disabled={boolean('Disabled', false)}
      onChange={action('onChange')}
    >
      <BaseExpansionPanelSummary expandIcon={ArrowDown}>
        <span style={{ fontSize: '1.7rem', marginRight: '2.5rem' }}>
          {text('Expansion Panel Title', 'Expansion Panel Title')}
        </span>
      </BaseExpansionPanelSummary>
      <BaseExpansionPanelDetails>
        <ImageWrapper>
          {iconDictionary('image', 'large')}
        </ImageWrapper>
        <div>
          {text('Content Text', contentText)}
        </div>
      </BaseExpansionPanelDetails>
    </BaseExpansionPanel>
  );
  return ExpansionPanel;
};

imageStory.story = { name: 'with image' };

export const defaultExpandedStory = () => {
  const ExpansionPanel = (
    <BaseExpansionPanel
      defaultExpanded
      disabled={boolean('Disabled', false)}
      onChange={action('onChange')}
    >
      <BaseExpansionPanelSummary expandIcon={ArrowDown}>
        <span style={{ fontSize: '1.7rem', marginRight: '2.5rem' }}>
          {text('Expansion Panel Title', 'Expansion Panel Title')}
        </span>
      </BaseExpansionPanelSummary>
      <BaseExpansionPanelDetails>
        {text('Content Text', contentText)}
      </BaseExpansionPanelDetails>
    </BaseExpansionPanel>
  );
  return ExpansionPanel;
};

defaultExpandedStory.story = { name: 'default expanded' };
