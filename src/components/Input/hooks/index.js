import { useState } from 'react';
import { validate } from '../helpers/validate';

/**
 * @description Form Input Custom Hook
 * @param {string} initialState Value to initialize state with
 * @return {[string, function]} useFormInput returns a hook with a value in [0]
 *                              and the handleChange function in [1]
 * handleChange Usage: If an event event has been passed in as an argument, the
 * value will be updated with event.target.value. If no arguments have been passed in,
 * the value will be reset with an empty string.
 */
export const useFormInput = (initialState) => {
  const [value, setValue] = useState(initialState);

  const handleChange = (e) => {
    if (e) {
      setValue(e.target.value);
    } else {
      setValue('');
    }
  };

  return [value, handleChange];
};

/**
 * @description Form Input with Validation Custom Hook
 * @param {string} initialValue Value to initialize state with
 * @param {object} validationProps Relevant props for the validation function to take (type, required)
 *
 * @return {[object, function, function]} returns a hook with an object containing value and error in [0],
 *                                        the handleInputChange function in [1],
 *                                        and the handleInputValidation function in [2]
 */
export const useValidatedFormInput = (initialValue = '', validationProps) => {
  const [field, setField] = useState({ error: '', value: initialValue });

  const handleChange = (e) => {
    if (e) {
      setField({ ...field, value: e.target.value });
    } else {
      setField('');
    }
  };

  const handleValidation = () => {
    const { value } = field;
    const validatedResult = validate({ value, ...validationProps });
    const errorMessage = validatedResult ? validatedResult.message : '';
    setField(Object.assign({}, field, { error: errorMessage }));
    return !errorMessage;
  };

  return [field, handleChange, handleValidation];
};
