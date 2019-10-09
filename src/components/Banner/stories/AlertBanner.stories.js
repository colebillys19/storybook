import React from 'react';
import { storiesOf } from '@storybook/react';

import AlertBanner from '../AlertBanner';

const bannerContent = <div style={{ padding: '20px' }}>Banner Content</div>;

storiesOf('Banners|AlertBanner', module)
  .add('default', () => <AlertBanner>{bannerContent}</AlertBanner>);
