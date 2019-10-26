import React from 'react';
import T from 'prop-types';

export const MetaProps = () => <div />;

MetaProps.propTypes = {
  /**
   * (componentGroup | state)
   * Matches component caption in Storybook's navigation.
   */
  title: T.string.isRequired,
  /**
   * An array of decorators.
   */
  decorators: T.arrayOf(T.func),
  /**
   * An object of parameters.
   */
  parameters: T.objectOf(T.shape({
    component: T.element,
  }))
};

export const StoryProps = () => <div />

StoryProps.propTypes = {
  /**
   * A react component.
   */
  children: T.element.isRequired,
  /**
   * Name of the state of the component matches the side panel navigation.
   */
  name: T.string.isRequired,
}

export const PreviewProps = () => <div />;

PreviewProps.propTypes = {
  /**
   * A story component
   */
  children: T.element.isRequired,
}

export const PropsProps = () => <div />;

PropsProps.propTypes = {
  /**
   * A react component with prop types or default props defined.
   */
  of: T.element.isRequired,
}

export const OtherStoriesProps = () => <div />;

OtherStoriesProps.propTypes = {
  /**
   * The id of the story to reference from the storyBook.
   */
  id: T.string.isRequired,
}