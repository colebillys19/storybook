import React from 'react';
import { render, fireEvent } from '@testing-library/react';

import { checkBasicRendering, checkRequiredProps } from '../../../utils/testingHelpers';
import ResultBanner from '../ResultBanner';

describe('<ResultBanner />', () => {
  const onClose = jest.fn();
  const errorComponent = (
    <ResultBanner
      error={{ message: 'error' }}
      onClose={onClose}
      success={false}
    />
  );
  const successComponent = (
    <ResultBanner
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
    expect(container.querySelector('div[color="#C1363F"]')).toBeTruthy();
  });

  it('renders success banner with correct background color', () => {
    const { container } = render(successComponent);
    expect(container.querySelector('div[color="#5DBA9C"]')).toBeTruthy();
  });

  it('hides banner when close button is clicked', () => {
    const { container } = render(errorComponent);
    const banner = container.querySelector('div[color="#C1363F"]');
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
