import React from 'react';
import { storiesOf } from '@storybook/react';

import TitleCard from '../TitleCard';

const cardContent = <div style={{ padding: '20px' }}>Card Content</div>;

storiesOf('Cards|TitleCard', module)
  .add('default', () => <TitleCard>{cardContent}</TitleCard>);
