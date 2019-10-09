import React from 'react';
import { storiesOf } from '@storybook/react';

import ErrorSuccessBanner from '../ErrorSuccessBanner';

const bannerContent = <div style={{ padding: '20px' }}>Banner Content</div>;

storiesOf('Banners|ErrorSuccessBanner', module)
  .add('default', () => <ErrorSuccessBanner>{bannerContent}</ErrorSuccessBanner>);
