/**
 * @description Circular, rotating loading indicator
 *              For when the client is waiting for async data to finish loading
 */

import React from 'react';

import LoadingIndicator from '../LoadingIndicator';

export default {
  parameters: { component: LoadingIndicator },
  title: 'Loading Indicators|LoadingIndicator',
};

export const defaultStory = () => <LoadingIndicator />;

defaultStory.story = { name: 'default' };
