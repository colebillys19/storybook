import React from 'react';
import { withKnobs } from '@storybook/addon-knobs';
import iconDictionary from '../../../utils/iconDictionary';

export default {
  decorators: [withKnobs],
  title: 'Banners|Thing',
};

export const defaultStory = () => (
  <div>
    {iconDictionary('arrowDown', 'medium')}
    {iconDictionary('cancel', 'medium')}
    {iconDictionary('close', 'medium')}
    {iconDictionary('dollar', 'medium')}
    {iconDictionary('expandMore', 'medium')}
    {iconDictionary('image', 'medium')}
    {iconDictionary('inbox', 'medium')}
    {iconDictionary('plus1', 'medium')}
    {iconDictionary('profile', 'medium')}
    {iconDictionary('star', 'medium')}
    {iconDictionary('successOutline', 'medium')}
    {iconDictionary('visibility', 'medium')}
    {iconDictionary('visibilityOff', 'medium')}
    {iconDictionary('warning', 'medium')}
  </div>
);

defaultStory.story = { name: 'default' };
