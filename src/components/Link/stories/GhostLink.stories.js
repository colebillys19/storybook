/**
 * @description Main Ghost Button used throughout the Silver Site
 * @props
 * Icon: (SVG) Icon to render if provided. Icons should be selected and styled through the
 *       iconDictionary before reaching this component
 * label: (string|array) Text link label
 * path: (string|array) Relative url representing the location to link to.
 *        Can be a string or an url object
 * replace: (bool) When true, clicking the link will replace current entry in history stack
 *          instead of adding a new one
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

import GhostButtonLink from '../GhostButtonLink';

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

storiesOf('Links|GhostButtonLink', module)
  .addDecorator(withKnobs)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('default', () => (
    <GhostButtonLink
      label={text('Label', labelText)}
      path={path}
    />
  ))
  .add('icon', () => (
    <GhostButtonLink
      Icon={iconDictionary(
        select('Icon', iconOptions, iconDefault),
        select('Icon Size', sizeOptions, sizeDefault),
        'button',
      )}
      label={text('Label', labelText)}
      path={path}
    />
  ));
