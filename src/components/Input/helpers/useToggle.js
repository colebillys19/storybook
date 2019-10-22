import { useState } from 'react';

/**
 * @description Universal Toggle Custom hook
 * @param {bool} initialState Initial state of the toggle
 * @return {[bool, function]} The return will be an array with array[0] being the value of the toggle state
 *                            and array[1] being the setState function that will toggle the state
 */
const useToggle = (initialState) => {
  const [value, setValue] = useState(initialState);
  const handleToggle = () => setValue((oldValue) => !oldValue);
  return [value, handleToggle];
};

export default useToggle;
