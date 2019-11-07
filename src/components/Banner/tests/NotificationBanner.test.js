import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {
  checkBasicRendering,
  checkRequiredProps,
} from '../../../utils/testingHelpers';
import NotificationBanner from '../NotificationBanner';

describe('<NotificationBanner />', () => {
  const onClick = jest.fn();
  const component = (
    <NotificationBanner
      buttonText="button text"
      messageText="message text"
      onClick={onClick}
    />
  );

  checkBasicRendering(component);
  checkRequiredProps(component);

  it('calls onClick when button is clicked', () => {
    const { container } = render(component);
    const button = container.querySelector('button');
    fireEvent.click(button);
    expect(onClick).toHaveBeenCalledTimes(1);
  });
});
