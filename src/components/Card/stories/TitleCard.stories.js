import React from 'react';
import { storiesOf } from '@storybook/react';

import TitleCard from '../TitleCard';

const cardContent = <div style={{ padding: '20px' }}>card content</div>;

storiesOf('Cards|TitleCard', module)
  .add('default', () => <TitleCard>{cardContent}</TitleCard>);
