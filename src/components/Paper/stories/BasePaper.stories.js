import React from 'react';
import { storiesOf } from '@storybook/react';

import BasePaper from '../BasePaper';

const paperContent = <div style={{ padding: '20px' }}>paper content</div>;

storiesOf('Paper|BasePaper', module)
  .add('default', () => <BasePaper>{paperContent}</BasePaper>);
