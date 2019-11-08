/**
 * @description Base Link to be used throughout Silver Site
 * @property icon: (SVG) Icon to render if provided. Icons should be selected and styled through the
 *                       iconDictionary before reaching this component
 * @property label: (string|array) Text link label
 * @property path: (string|array) Relative url representing the location to link to
 *           Can be a string or an url object
 * @property replace: (bool) When true, clicking the link will replace current entry
 *                           in history stack instead of adding a new one
 */

import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { select, text, withKnobs } from '@storybook/addon-knobs/react';

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

export default {
  decorators: [
    (story) => <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>,
    withKnobs,
  ],
  parameters: { component: BaseLink },
  title: 'Links|BaseLink',
};

export const defaultStory = () => (
  <BaseLink label={text('Label Text', labelText, 'Link Props')} path={path} />
);

defaultStory.story = { name: 'default' };

export const iconStory = () => (
  <BaseLink
    Icon={iconDictionary(
      select('Icon', iconOptions, iconDefault),
      select('Icon Size', sizeOptions, sizeDefault),
      'button'
    )}
    label={text('Label Text', labelText)}
    path={path}
  />
);

iconStory.story = { name: 'icon' };
