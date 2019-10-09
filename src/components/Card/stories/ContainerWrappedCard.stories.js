import React from 'react';
import { storiesOf } from '@storybook/react';

import ContainerWrappedCard from '../ContainerWrappedCard';

const cardContent = <div style={{ padding: '20px' }}>Card Content</div>;

storiesOf('Cards|ContainerWrappedCard', module)
  .add('default', () => <ContainerWrappedCard>{cardContent}</ContainerWrappedCard>);
