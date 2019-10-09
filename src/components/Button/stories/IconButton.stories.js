import React from 'react';
import { storiesOf } from '@storybook/react';
import { action } from '@storybook/addon-actions';

import IconButton from '../IconButton';

const iconButtonContent = <div style={{ padding: '20px' }}>icon button content</div>;

storiesOf('Buttons|IconButton', module)
  .add('default', () => (
    <IconButton disabled onClick={action('onClickButton')}>
      {iconButtonContent}
    </IconButton>
  ));
