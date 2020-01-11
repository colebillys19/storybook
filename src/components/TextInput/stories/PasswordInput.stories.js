import React, { useState } from 'react';
import { action } from '@storybook/addon-actions';
import {
  boolean,
  // select,
  text,
  withKnobs,
} from '@storybook/addon-knobs';

import PasswordInput from '../PasswordInput';
import PasswordInputDocs from '../docs/PasswordInput.docs.mdx';
import { msBrightPurple } from '../../../utils/defaultStyleHelper';
// import { StyledLabel, StyledSpan } from '../styles/PasswordInput.styles';
// import IconDictionary from '../../../utils/IconDictionary';

export default {
  decorators: [withKnobs],
  parameters: { component: PasswordInput, docs: { page: PasswordInputDocs } },
  title: 'Inputs|PasswordInput',
};

// const iconOptions = {
//   Inbox: 'inbox',
//   Profile: 'profile',
//   Warning: 'warning',
// };

// const iconPlacementOptions = { End: 'end', Start: 'start' };

export const DefaultStory = () => {
  const [value, setValue] = useState('');

  const handleChange = (e) => {
    action('onChange')();
    setValue(e.target.value);
  };

  return (
    <PasswordInput
      color={text('Color', msBrightPurple)}
      disabled={boolean('Disabled', false)}
      error={boolean('Error', false)}
      fullWidth={boolean('Full Width', false)}
      id="mock-id"
      inputProps={{ 'aria-describedby': 'mock-aria-describedby' }}
      onBlur={action('onBlur')}
      onChange={handleChange}
      placeholder={text('Placeholder', '')}
      readOnly={boolean('Read Only', false)}
      value={value}
    />
  );
};

DefaultStory.story = { name: 'default' };

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
//       <PasswordInput
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
//     <PasswordInput
//       adornmentContent={
//         IconDictionary(select('Icon', iconOptions, 'inbox'), 'mediumSmall')
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
