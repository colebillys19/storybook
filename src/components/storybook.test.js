import initStoryshots from '@storybook/addon-storyshots';

// automatically creates a snapshot for each of the stories
// requires dev dependencies @storybook/addon-storyshots react-test-renderer require-context.macro
// react-test-renderer version should be the same as react and react-dom packages
initStoryshots();
