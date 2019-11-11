import React from 'react';

import LoadingIndicatorDocs from '../docs/LoadingIndicator.docs.mdx';
import SmallLoadingIndicator from '../SmallLoadingIndicator';

export default {
  parameters: { component: SmallLoadingIndicator, docs: { page: LoadingIndicatorDocs } },
  title: 'Loading Indicators|SmallLoadingIndicator',
};

export const defaultStory = () => <SmallLoadingIndicator />;

defaultStory.story = { name: 'default' };
