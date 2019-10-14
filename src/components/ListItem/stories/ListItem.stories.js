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

import { BaseListItem } from '../index';
import iconDictionary from '../../../shared/iconDictionary';

const defaultListItem = {
  button: false,
  disabled: false,
  text: 'Default List Item',
};

const iconOptions = {
  cancel: 'cancel',
  inbox: 'inbox',
  profile: 'profile',
  star: 'star',
};

const iconDefault = 'star';

storiesOf('ListItem|BaseListItem', module)
  .addDecorator(withKnobs)
  .add('default', () => <BaseListItem {...defaultListItem} />)
  .add('button', () => (
    <BaseListItem
      button={boolean('button', true)}
      disabled={boolean('disabled', false)}
      onClick={action('onClickButton')}
      text={text('text', 'List Item Button')}
    />
  ))
  .add('disabled', () => (
    <BaseListItem
      button={boolean('button', false)}
      disabled={boolean('disabled', true)}
      onClick={action('onClickButton')}
      text={text('text', 'List Item Disabled')}
    />
  ))
  .add('icon', () => (
    <BaseListItem
      button={boolean('button', false)}
      disabled={boolean('disabled', false)}
      onClick={action('onClickButton')}
      text={text('text', 'List Item w/ Icon')}
      selected={boolean('selected', false)}
    >
      <ListItemIcon
        children={iconDictionary(select('Icon', iconOptions, iconDefault))}
      />
    </BaseListItem>
  ))
  .add('selected', () => (
    <BaseListItem
      button={boolean('button', false)}
      disabled={boolean('disabled', false)}
      onClick={action('onClickButton')}
      selected={boolean('selected', true)}
      text={text('text', 'List Item Selected')}
    />
  ));
