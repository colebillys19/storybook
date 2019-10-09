import React from 'react';
import { storiesOf } from '@storybook/react';

import InsetPaper from '../InsetPaper';

const paperContent = <div style={{ padding: '20px' }}>Paper Content</div>;

storiesOf('Paper|InsetPaper', module)
  .add('default', () => <InsetPaper>{paperContent}</InsetPaper>);
