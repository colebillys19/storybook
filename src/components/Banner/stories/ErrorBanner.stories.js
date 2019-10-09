import React from 'react';
import { storiesOf } from '@storybook/react';

import ErrorBanner from '../ErrorBanner';

const bannerContent = <div style={{ padding: '20px' }}>Banner Content</div>;

storiesOf('Banners|ErrorBanner', module)
  .add('default', () => <ErrorBanner>{bannerContent}</ErrorBanner>);
