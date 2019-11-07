import React from 'react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  text,
  withKnobs,
} from '@storybook/addon-knobs/react';

import ExpansionPanel from '../BaseExpansionPanel';
import ExpansionPanelDetails from '../sub-components/ExpansionPanelDetails';
import ExpansionPanelSummary from '../sub-components/ExpansionPanelSummary';
import iconDictionary from '../../../utils/iconDictionary';
import { WithImageContentWrapper, ImageWrapper } from '../styles/BaseExpansionPanel.styles';

// eslint-disable-next-line
const contentText = `Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat. Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur. Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.`;

const ArrowDown = iconDictionary('arrowDown', 'mediumLarge');

export default {
  decorators: [withKnobs],
  parameters: { component: ExpansionPanel },
  title: 'Miscellaneous|ExpansionPanel',
};

export const defaultStory = () => {
  const BaseExpansionPanel = (
    <ExpansionPanel
      disabled={boolean('Disabled', false)}
      onChange={action('onChange')}
    >
      <ExpansionPanelSummary expandIcon={ArrowDown}>
        <span style={{ fontSize: '1.7rem', marginRight: '2.5rem' }}>
          {text('Expansion Panel Title', 'Expansion Panel Title')}
        </span>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {text('Content Text', contentText)}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
  return BaseExpansionPanel;
};

defaultStory.story = { name: 'default' };

export const secondaryText = () => {
  const BaseExpansionPanel = (
    <ExpansionPanel
      disabled={boolean('Disabled', false)}
      onChange={action('onChange')}
    >
      <ExpansionPanelSummary expandIcon={ArrowDown}>
        <span style={{ fontSize: '1.7rem', marginRight: '2.5rem' }}>
          {text('Expansion Panel Title', 'Expansion Panel Title')}
        </span>
        <span style={{ color: '#aaa' }}>
          {text('Secondary Text', 'Some Secondary Text')}
        </span>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {text('Content Text', contentText)}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
  return BaseExpansionPanel;
};

secondaryText.story = { name: 'with secondary text' };

export const imageStory = () => {
  const BaseExpansionPanel = (
    <ExpansionPanel
      disabled={boolean('Disabled', false)}
      onChange={action('onChange')}
    >
      <ExpansionPanelSummary expandIcon={ArrowDown}>
        <span style={{ fontSize: '1.7rem', marginRight: '2.5rem' }}>
          {text('Expansion Panel Title', 'Expansion Panel Title')}
        </span>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <WithImageContentWrapper>
          <ImageWrapper>
            {iconDictionary('image', 'large')}
          </ImageWrapper>
          <div>
            {text('Content Text', contentText)}
          </div>
        </WithImageContentWrapper>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
  return BaseExpansionPanel;
};

imageStory.story = { name: 'with image' };

export const defaultExpandedStory = () => {
  const BaseExpansionPanel = (
    <ExpansionPanel
      defaultExpanded
      disabled={boolean('Disabled', false)}
      onChange={action('onChange')}
    >
      <ExpansionPanelSummary expandIcon={ArrowDown}>
        <span style={{ fontSize: '1.7rem', marginRight: '2.5rem' }}>
          {text('Expansion Panel Title', 'Expansion Panel Title')}
        </span>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        {text('Content Text', contentText)}
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
  return BaseExpansionPanel;
};

defaultExpandedStory.story = { name: 'default expanded' };
