import React from 'react';
import { storiesOf } from '@storybook/react';

import TitleCard from '../TitleCard';

const cardContent = <h1>card content</h1>;

storiesOf('Cards|TitleCard', module)
  .add('default', () => <TitleCard>{cardContent}</TitleCard>);
