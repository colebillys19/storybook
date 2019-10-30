/**
 * @description Circular, rotating loading indicator
 *              For when the client is waiting for async data to finish loading
 */

import React from 'react';

import LoadingIndicatorNormal from '../LoadingIndicatorNormal';

export default {
  parameters: { component: LoadingIndicatorNormal },
  title: 'Loading Indicators|LoadingIndicatorNormal',
};

export const defaultStory = () => <LoadingIndicatorNormal />;

defaultStory.story = { name: 'default' };
