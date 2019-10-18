/**
 * @description component description
 * @props
 * prop name (prop type) prop description
 * prop name (prop type) prop description
 * prop name (prop type) prop description
 */

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { storiesOf } from '@storybook/react';
import {
  withKnobs,
  text,
  select,
} from '@storybook/addon-knobs/react';

import iconDictionary from '../../../utils/iconDictionary';
import BaseLink from '../BaseLink';

const iconOptions = {
  cancel: 'cancel',
  inbox: 'inbox',
  profile: 'profile',
  star: 'star',
};

const iconDefault = 'star';

const sizeOptions = {
  large: 'large',
  medium: 'medium',
  mediumLarge: 'mediumLarge',
  mediumSmall: 'mediumSmall',
  small: 'small',
  xSmall: 'xSmall',
};

const sizeDefault = 'small';

const labelText = 'LABEL TEXT';

const path = 'path';

storiesOf('Links|BaseLink', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator(withKnobs)
  .add('default', () => (
    <BaseLink
      label={text('Label Text', labelText, 'Link Props')}
      path={path}
    />
  ))
  .add('icon', () => (
    <BaseLink
      Icon={iconDictionary(
        select('Icon', iconOptions, iconDefault),
        select('Icon Size', sizeOptions, sizeDefault),
        'button',
      )}
      label={text('Label Text', labelText)}
      path={path}
    />
  ));
