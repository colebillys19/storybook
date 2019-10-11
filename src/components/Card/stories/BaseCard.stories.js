import React from 'react';
import { storiesOf } from '@storybook/react';

import BaseCard from '../BaseCard';

const cardContent = <div style={{ padding: '20px' }}>card content</div>;

storiesOf('Cards|BaseCard', module)
  .add('default', () => <BaseCard>{cardContent}</BaseCard>);
