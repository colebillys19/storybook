/**
 * @description Expansion panel component that displays summary component/text which on click
 *              can expand to display additional details component/text.
 * @property children: (node) The content of the expansion panel.
 * @property classes: (object) Override or extend the styles applied to the component.
 * @property defaultExpanded: (bool) [defaultExpanded=false] If true, expands the panel by default.
 * @property disabled: (bool) [disabled=false] If true, the panel will be displayed
 *                                             in a disabled state.
 * @property expanded: (bool) If true, expands the panel, otherwise collapse it.
 *                            Setting this prop enables control over the panel.
 * @property onChange: (func) Callback fired when the expand/collapse state is changed.
 * @property TransitionComponent: (elementType) The component used for the collapse effect.
 * @property TransitionProps: (object) Props applied to the Transition element.
 */

import React from 'react';
import Typography from '@material-ui/core/Typography';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs/react';

import iconDictionary from '../../../utils/iconDictionary';
import ExpansionPanel from '../ExpansionPanel';
import ExpansionPanelDetails from '../sub-components/ExpansionPanelDetails';
import ExpansionPanelSummary from '../sub-components/ExpansionPanelSummary';

const defaultExpansionSummary = `Lorem ipsum dolor sit amet, consectetur adipiscing elit.
Suspendisse malesuada lacus ex, sit amet blandit leo lobortis
eget.`;
const defaultExpansionTitle = 'Expansion Panel';

const iconOptions = {
  arrowDown: 'arrowDown',
  expandMore: 'expandMore',
};

const iconDefault = 'expandMore';

const sizeOptions = {
  large: 'large',
  medium: 'medium',
  mediumLarge: 'mediumLarge',
  mediumSmall: 'mediumSmall',
  small: 'small',
  xSmall: 'xSmall',
};

const sizeDefault = 'mediumLarge';

const headingStyles = {
  flexBasis: '33.33%',
  flexShrink: 0,
  fontSize: '1.6rem',
};

const secondaryHeadingStyles = {
  color: '#777',
  fontSize: '1.6rem',
};

const expansionDetailsStyles = { fontSize: '1.6rem' };

const defaultFalse = false;

export default {
  decorators: [withKnobs],
  parameters: { component: ExpansionPanel },
  title: 'Miscellaneous|ExpansionPanel',
};

export const defaultStory = () => {
  const ExpandMoreIcon = iconDictionary(
    select('Icon', iconOptions, iconDefault),
    select('Size', sizeOptions, sizeDefault)
  );

  const SimpleExpansionPanel = (
    <ExpansionPanel disabled={boolean('Disabled', defaultFalse)} onChange={action('onChange')}>
      <ExpansionPanelSummary expandIcon={ExpandMoreIcon}>
        <Typography style={headingStyles}>
          {text('Expansion Title', defaultExpansionTitle)}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography style={expansionDetailsStyles}>
          {text('Summary Text', defaultExpansionSummary)}
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
  return SimpleExpansionPanel;
};

defaultStory.story = { name: 'default' };

export const secondaryText = () => {
  const ExpandMoreIcon = iconDictionary(
    select('Icon', iconOptions, iconDefault),
    select('Size', sizeOptions, sizeDefault)
  );
  const defaultSecondaryText = 'Lorem ipsum dolor sit amet consectetur';

  const SimpleExpansionPanel = (
    <ExpansionPanel disabled={boolean('Disabled', defaultFalse)} onChange={action('onChange')}>
      <ExpansionPanelSummary expandIcon={ExpandMoreIcon}>
        <Typography style={headingStyles}>
          {text('Expansion Title', defaultExpansionTitle)}
        </Typography>
        <Typography style={secondaryHeadingStyles}>
          {text('Secondary Text', defaultSecondaryText)}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography style={expansionDetailsStyles}>
          {text('Summary Text', defaultExpansionSummary)}
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
  return SimpleExpansionPanel;
};

secondaryText.story = { name: 'secondary text' };

export const expanded = () => {
  const ExpandMoreIcon = iconDictionary(
    select('Icon', iconOptions, iconDefault),
    select('Size', sizeOptions, sizeDefault)
  );

  const SimpleExpansionPanel = (
    <ExpansionPanel
      defaultExpanded
      disabled={boolean('Disabled', defaultFalse)}
      onChange={action('onChange')}
    >
      <ExpansionPanelSummary expandIcon={ExpandMoreIcon}>
        <Typography style={headingStyles}>
          {text('Expansion Title', defaultExpansionTitle)}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography style={expansionDetailsStyles}>
          {text('Summary Text', defaultExpansionSummary)}
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
  return SimpleExpansionPanel;
};

expanded.story = { name: 'expanded' };

export const disabledStory = () => {
  const ExpandMoreIcon = iconDictionary(
    select('Icon', iconOptions, iconDefault),
    select('Size', sizeOptions, sizeDefault)
  );

  const SimpleExpansionPanel = (
    <ExpansionPanel disabled onChange={action('onChange')}>
      <ExpansionPanelSummary expandIcon={ExpandMoreIcon}>
        <Typography style={headingStyles}>
          {text('Expansion Title', defaultExpansionTitle)}
        </Typography>
      </ExpansionPanelSummary>
      <ExpansionPanelDetails>
        <Typography style={expansionDetailsStyles}>
          {text('Summary Text', defaultExpansionSummary)}
        </Typography>
      </ExpansionPanelDetails>
    </ExpansionPanel>
  );
  return SimpleExpansionPanel;
};

disabledStory.story = { name: 'disabled' };

export const noExpandIcon = () => (
  <ExpansionPanel disabled={boolean('Disabled', defaultFalse)} onChange={action('onChange')}>
    <ExpansionPanelSummary style={headingStyles}>
      <Typography style={headingStyles}>
        {text('Expansion Title', defaultExpansionTitle)}
      </Typography>
    </ExpansionPanelSummary>
    <ExpansionPanelDetails>
      <Typography style={expansionDetailsStyles}>
        {text('Summary Text', defaultExpansionSummary)}
      </Typography>
    </ExpansionPanelDetails>
  </ExpansionPanel>
);

noExpandIcon.story = { name: 'no expand icon' };
