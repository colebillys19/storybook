/**
 * @description Circular, rotating loading indicator.
 *              Smaller than the default Loading Indicator
 */

import React from 'react';

import LoadingIndicatorSmall from '../LoadingIndicatorSmall';

export default {
  parameters: { component: LoadingIndicatorSmall },
  title: 'Loading Indicators|LoadingIndicatorSmall',
};

export const defaultStory = () => <LoadingIndicatorSmall />;

defaultStory.story = { name: 'default' };
