/**
 * @description Create an input with type text when a controlled text input is needed.
 * @property autoComplete: (string) This props helps users to fill forms faster.
 * @property autoFocus: (bool) If true, the input element will be focused during th first mount.
 * @property classes: (object) Override or extend the styles applied to the component.
 * @property defaultValue: (string|number|bool) The default value of the input element.
 * @property disabled: (bool) [disabled=false] Callback fired when a radio button is selected.
 * @property id: (string) The id of the input element.
 *                        Use this prop to make label and helperText accessible for screen readers
 * @property InputLabelProps: (object) Props applied to the InputLabel element
 * @property InputProps: (object) Props applied to the input element. It will be a FilledInput,
 *                                OutlinedInput or Input component depending
 *                                on the variant prop value.
 * @property margin: ('none' | 'dense' | 'normal') If dense or normal, will adjust verical spacing 
 *                                                 of this and contained components.
 * @property name: (string) Name attribute of the input element.
 * @property onChange: (func) Callback fired when the value is changed.
 *                            function(event: object) => void.
 *                            The event source of the callback.
 *                            You can pull out new value by accessing event.target.value(string).
 * @property placeholder: (string) The short hint displayed in the input
 *                                 before the user enters a value.
 * @property required: (bool) [required=false] If true, the label is displayed in the input
 *                                             before the user enters a value.
 * @property rows: (string|number) Number of rows to display when multiline option is set to true.
 * @property rowsMax: (string|number) Maximum number of rows to display when
 *                                    multiline option is set to true.
 * @property select: (bool) [select=false] Render a Select element while passing the Input element
 *                                         to Select as input parameter. If this option is set
 *                                         you must pass the options of the select as children.
 * @property SelectProps: (object) Props applied to the Select element.
 * @property type: (string) [type="text"] Type of the input element.
 * @property                              It should be a valid HTML5 input type.
 * @property value: (any) The value of the input element, required for a controlled component.
 * @property variant: ('standard' | 'outlined' | 'filled') The variant to use.
 */

import React from 'react';
import { storiesOf } from '@storybook/react';
import {
  boolean,
  select,
  text,
  withKnobs,
} from '@storybook/addon-knobs/react';


import { TextField } from '../index';

const defaultPlaceholder = 'Placeholder text';
const defaultLabel = 'Text Field Label';
const marginOptions = {
  dense: 'dense',
  none: 'none',
  normal: 'normal',
};
const defaultMargin = 'none';
const defaultFalse = false;
const rowOptions = {
  1: 1,
  2: 2,
  3: 3,
  4: 4,
};
const defaultRow = 1;
const defaultRowMax = 4;

const variantOptions = {
  filled: 'filled',
  outlined: 'outlined',
  standard: 'standard',
};
const defaultVariant = 'standard';
const handleChange = () => 'defaultOnChange';

storiesOf('TextField|TextField', module)
  .addDecorator(withKnobs)
  .add('default', () => (
    <TextField
      label={text('Label', defaultLabel)}
      margin={select('Margin', marginOptions, defaultMargin)}
      onChange={handleChange}
      variant={select('Variant', variantOptions, defaultVariant)}
    />
  ))
  .add('autoFocus', () => (
    <TextField
      autoFocus
      label={text('Label', defaultLabel)}
      margin={select('Margin', marginOptions, defaultMargin)}
      onChange={handleChange}
      placeholder={text('Placeholder', defaultPlaceholder)}
    />
  ))
  .add('disabled', () => (
    <TextField
      disabled
      label={text('Label', defaultLabel)}
      margin={select('Margin', marginOptions, defaultMargin)}
      onChange={handleChange}
      placeholder={text('Placeholder', defaultPlaceholder)}
      required={boolean('Required', false)}
      variant={select('Variant', variantOptions, defaultVariant)}
    />
  ))
  .add('multiline', () => (
    <TextField
      label={text('Label', defaultLabel)}
      margin={select('Margin', marginOptions, defaultMargin)}
      multiline
      onChange={handleChange}
      required={boolean('Require', defaultFalse)}
      rows={select('Rows', rowOptions, defaultRow)}
      rowsMax={select('Rows Max', rowOptions, defaultRowMax)}
      variant={select('Variant', variantOptions, defaultVariant)}
    />
  ))
  .add('placeholder', () => (
    <TextField
      label={text('Label', defaultLabel)}
      margin={select('Margin', marginOptions, defaultMargin)}
      onChange={handleChange}
      placeholder={text('Placeholder', defaultPlaceholder)}
      required={boolean('Require', defaultFalse)}
      variant={select('Variant', variantOptions, defaultVariant)}
    />
  ));
