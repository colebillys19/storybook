/**
 * @description Circular, rotating loading indicator.
 *              Smaller than the default Loading Indicator
 */

import React from 'react';

import SmallLoadingIndicator from '../SmallLoadingIndicator';

export default {
  parameters: { component: SmallLoadingIndicator },
  title: 'Loading Indicators|SmallLoadingIndicator',
};

export const defaultStory = () => <SmallLoadingIndicator />;

defaultStory.story = { name: 'default' };
