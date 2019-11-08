import React from 'react';
import { cleanup, render, fireEvent } from '@testing-library/react';

import {
  checkBasicRendering,
  checkRequiredProps,
} from '../../../utils/testingHelpers';
import RadioButtonGroup from '../RadioButtonGroup';

afterEach(cleanup);

describe('<RadioButtonGroup />', () => {
  const handleChange = jest.fn();
  const onClick = jest.fn();

  const value1 = 'option1';
  const value2 = 'option2';
  const initialValue = 'option1';

  const options = [
    {
      label: 'Option 1',
      value: value1,
    },
    {
      label: 'Option 2',
      value: value2,
    },
  ];

  const component = (
    <RadioButtonGroup
      onChange={handleChange}
      onClick={onClick}
      options={options}
      value={initialValue}
    />
  );

  checkBasicRendering(component);
  checkRequiredProps(component);

  it('Expect radio to have been clicked', () => {
    const { container } = render(component);
    const radio = container.querySelector('input[type="radio"]');
    fireEvent.click(radio);
    expect(radio).toHaveProperty('checked', true);
    expect(onClick).toHaveBeenCalled();
  });

  it('Expect radio to value to have changed', () => {
    const { container } = render(component);
    const radio = container.querySelector('input[type="radio"]');
    expect(radio).toHaveProperty('checked', true);
    fireEvent.change(radio, { target: { value: 'option2' } });
    expect(radio.value).toBe('option2');
  });
});
