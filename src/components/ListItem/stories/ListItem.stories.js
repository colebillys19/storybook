/**
 * @description component description
 * @props
 * prop name (prop type) prop description
 * prop name (prop type) prop description
 * prop name (prop type) prop description
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import ListItemIcon from '@material-ui/core/ListItemIcon';

import {
  withKnobs,
  text,
  select,
  boolean,
} from '@storybook/addon-knobs/react';
import { action } from '@storybook/addon-actions';

import { ListItem } from '../index';
import iconDictionary from '../../../utils/iconDictionary';

const listItemText = 'List Item Text';

const iconOptions = {
  cancel: 'cancel',
  inbox: 'inbox',
  profile: 'profile',
  star: 'star',
};

const iconDefault = 'star';

storiesOf('List Items|ListItem', module)
  .addDecorator(withKnobs)
  .add('default', () => <ListItem text={listItemText} />)
  .add('button', () => (
    <ListItem
      button
      disabled={boolean('disabled', false)}
      onClick={action('onClickButton')}
      text={text('Text', listItemText)}
    />
  ))
  .add('disabled', () => (
    <ListItem
      disabled
      text={text('Text', listItemText)}
    />
  ))
  .add('icon', () => (
    <ListItem
      button={boolean('button', false)}
      disabled={boolean('disabled', false)}
      onClick={action('onClickButton')}
      selected={boolean('selected', false)}
      text={text('Text', listItemText)}
    >
      <ListItemIcon>
        {iconDictionary(select('Icon', iconOptions, iconDefault))}
      </ListItemIcon>
    </ListItem>
  ))
  .add('selected', () => (
    <ListItem
      button={boolean('button', false)}
      disabled={boolean('disabled', false)}
      selected
      text={text('Text', listItemText)}
    />
  ));
