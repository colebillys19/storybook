import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { Checkbox } from '../index';
import {
  checkBasicRendering,
  checkEventHandler,
  checkRequiredProps,
} from '../../../utils/testingHelpers';


describe('<Checkbox />', () => {
  const handleChange = jest.fn();
  const component = <Checkbox onChange={handleChange} />;

  checkBasicRendering(component);
  checkRequiredProps(component);

  checkEventHandler(component, 'change', handleChange);

  it('Expect to checkbox to have changed', () => {
    const { container } = render(component);
    const checkbox = container.querySelector('input[type="checkbox"]');
    expect(checkbox.checked).toEqual(false);
    fireEvent.change(checkbox, { target: { checked: true } });
    expect(checkbox.checked).toEqual(true);
    fireEvent.click(checkbox);
    expect(checkbox.checked).toEqual(false);
  });
});
