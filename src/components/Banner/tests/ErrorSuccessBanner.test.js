import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import {
  checkBasicRendering,
  checkRequiredProps,
} from '../../../utils/testingHelpers';
import { ErrorSuccessBanner } from '../index';

describe('<ErrorSuccessBanner />', () => {
  const onClose = jest.fn();
  const errorComponent = (
    <ErrorSuccessBanner
      error={{ message: 'error' }}
      onClose={onClose}
      success={false}
    />
  );
  const successComponent = (
    <ErrorSuccessBanner
      error={false}
      onClose={onClose}
      success={{ message: 'success' }}
    />
  );

  checkBasicRendering(errorComponent);
  checkBasicRendering(successComponent);
  checkRequiredProps(errorComponent);
  checkRequiredProps(successComponent);

  it('renders error banner with correct background color', () => {
    const { container } = render(errorComponent);
    expect(container.querySelector('div[color="rgba(193, 54, 63, 1)"]')).toBeTruthy();
  });

  it('renders success banner with correct background color', () => {
    const { container } = render(successComponent);
    expect(container.querySelector('div[color="rgba(45, 189, 154, 1)"]')).toBeTruthy();
  });

  it('hides banner when close button is clicked', () => {
    const { container } = render(errorComponent);
    const banner = container.querySelector('div[color="rgba(193, 54, 63, 1)"]');
    const button = container.querySelector('button');
    fireEvent.click(button);
    const styles = getComputedStyle(banner);
    expect(styles.height).toEqual('0px');
  });

  it('calls onClose with error argument', () => {
    const { container } = render(errorComponent);
    const button = container.querySelector('button');
    fireEvent.click(button);
    expect(onClose).toHaveBeenCalledWith('error');
  });

  it('calls onClose with success argument', () => {
    const { container } = render(successComponent);
    const button = container.querySelector('button');
    fireEvent.click(button);
    expect(onClose).toHaveBeenCalledWith('success');
  });
});
