import React from 'react';

import LoadingIndicatorDocs from '../docs/LoadingIndicator.docs.mdx';
import BaseLoadingIndicator from '../BaseLoadingIndicator';

export default {
  parameters: { component: BaseLoadingIndicator, docs: { page: LoadingIndicatorDocs } },
  title: 'Loading Indicators|BaseLoadingIndicator',
};

export const defaultStory = () => <BaseLoadingIndicator />;

defaultStory.story = { name: 'default' };
