import React from 'react';
// import { action } from '@storybook/addon-actions';
import {
  // boolean,
  // select,
  // text,
  withKnobs,
} from '@storybook/addon-knobs';

import TestInput from '../TestInput';
import TestInputDocs from '../docs/BaseTextInput.docs.mdx';
// import { typography } from '../../../utils/defaultStyleHelper';
// import { msBrightPurple } from '../../../utils/defaultStyleHelper';
// import { StyledLabel, StyledSpan } from '../styles/TestInput.styles';
// import IconDictionary from '../../../utils/IconDictionary';

export default {
  decorators: [withKnobs],
  parameters: { component: TestInput, docs: { page: TestInputDocs } },
  title: 'Inputs|TestInput',
};

// const iconOptions = {
//   Inbox: 'inbox',
//   Profile: 'profile',
//   Warning: 'warning',
// };

// const iconPlacementOptions = { End: 'end', Start: 'start' };

const textAdornment = {
  color: 'red',
  // font: typography.font.robotoCondensed,
  // onClick: () => console.log('clicked'),
  position: 'end',
  // size: typography.size.s2,
  text: '808',
  // weight: typography.weight.bold,
};

export const DefaultStory = () => { // eslint-disable-line
  // const [value, setValue] = useState('');

  // const handleChange = (e) => {
  //   action('onChange')();
  //   setValue(e.target.value);
  // };

  // const textAdornment = {
  //   font: typography.font.robotoCondensed,
  //   size: typography.size.s2,
  //   text: 'yeet',
  //   weight: typography.weight.bold,
  // };

  return (
    <TestInput
      id="mock-id"
      inputProps={{ 'aria-describedby': 'mock-aria-describedby' }}
      textAdornment={textAdornment}
    />
  );
};

DefaultStory.story = { name: 'default' };

// export const DefaultStory = () => {
//   const [value, setValue] = useState('');

//   const handleChange = (e) => {
//     action('onChange')();
//     setValue(e.target.value);
//   };

//   return (
//     <TestInput
//       color={text('Color', msBrightPurple)}
//       disabled={boolean('Disabled', false)}
//       error={boolean('Error', false)}
//       fullWidth={boolean('Full Width', false)}
//       id="mock-id"
//       inputProps={{ 'aria-describedby': 'mock-aria-describedby' }}
//       onBlur={action('onBlur')}
//       onChange={handleChange}
//       placeholder={text('Placeholder', '')}
//       readOnly={boolean('Read Only', false)}
//       value={value}
//     />
//   );
// };

// DefaultStory.story = { name: 'default' };

// export const AccessibleStory = () => {
//   const [value, setValue] = useState('');

//   const handleChange = (e) => {
//     action('onChange')();
//     setValue(e.target.value);
//   };

//   return (
//     <Fragment>
//       <StyledLabel htmlFor="base-text-input">
//         {text('Label Text', 'label text')}
//       </StyledLabel>
//       <TestInput
//         color={text('Color', msBrightPurple)}
//         disabled={boolean('Disabled', false)}
//         error={boolean('Error', false)}
//         fullWidth={boolean('Full Width', false)}
//         id="base-text-input"
//         inputProps={{ 'aria-describedby': 'helper-text' }}
//         onBlur={action('onBlur')}
//         onChange={handleChange}
//         placeholder={text('Placeholder', '')}
//         readOnly={boolean('Read Only', false)}
//         value={value}
//       />
//       <StyledSpan id="helper-text">
//         {text('Helper Text', 'helper text')}
//       </StyledSpan>
//     </Fragment>
//   );
// };

// AccessibleStory.story = { name: 'accessible' };

// export const WithAdornmentStory = () => {
//   const [value, setValue] = useState('');

//   const handleChange = (e) => {
//     action('onChange')();
//     setValue(e.target.value);
//   };

//   return (
//     <TestInput
//       adornmentContent={
//         IconDictionary(select('Icon', iconOptions, 'visibilityOff'), 'mediumSmall')
//       }
//       adornmentPlacement={select('Icon Placement', iconPlacementOptions, 'start')}
//       color={text('Color', msBrightPurple)}
//       disabled={boolean('Disabled', false)}
//       error={boolean('Error', false)}
//       fullWidth={boolean('Full Width', false)}
//       id="mock-id"
//       inputProps={{ 'aria-describedby': 'mock-aria-describedby' }}
//       onBlur={action('onBlur')}
//       onChange={handleChange}
//       placeholder={text('Placeholder', '')}
//       readOnly={boolean('Read Only', false)}
//       value={value}
//     />
//   );
// };

// WithAdornmentStory.story = { name: 'with adornment' };
