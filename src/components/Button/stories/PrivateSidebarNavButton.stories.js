import React from 'react';
import { MemoryRouter } from 'react-router-dom';
import { addDecorator, storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import iconDictionary from '../../../shared/iconDictionary';

import PrivateSidebarNavButton from '../PrivateSidebarNavButton';

const Icon = iconDictionary('home', 'mediumSmall');
const label = 'label text';

storiesOf('Buttons|PrivateSidebarNavButton', module)
  .addDecorator((story) => (
    <MemoryRouter initialEntries={['/']}>{story()}</MemoryRouter>
  ))
  .add('default', () => (
    <PrivateSidebarNavButton
      disableFocusRipple
      disableRipple
      Icon={Icon}
      label={label}
      loading
      onClick={action('onClickButton')}
      to="/"
    />
  ));
