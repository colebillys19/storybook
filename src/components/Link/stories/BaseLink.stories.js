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

const sizeDefault = 'mediumSmall';

storiesOf('Links|BaseLink', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .addDecorator(withKnobs)
  .add('default', () => (
    <BaseLink
      label={text('label', 'Base Link', 'Link Props')}
      path={text('path', 'path', 'Link Props')}
    />
  ))
  .add('icon', () => (
    <BaseLink
      Icon={iconDictionary(
        select('Icon', iconOptions, iconDefault, 'Icon Props'),
        select('Icon Size', sizeOptions, sizeDefault, 'Icon Props'),
        'header',
      )}
      label={text('label', 'Base Link', 'Link Props')}
      path={text('path', 'path', 'Link Props')}
    />
  ));
