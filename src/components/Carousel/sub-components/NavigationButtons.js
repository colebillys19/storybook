import React, { Fragment } from 'react';
import T from 'prop-types';

import iconDictionary from '../../../utils/iconDictionary';
import { LeftNavButton, RightNavButton } from './NavigationButtons.styles';

const IconNext = iconDictionary('arrowRight', 'mediumLarge');
const IconPrevious = iconDictionary('arrowLeft', 'mediumLarge');

const NavigationButtons = ({
  children,
  numItems,
  position,
  setPosition,
}) => {
  const previousDisabled = position <= 0;
  const nextDisabled = position >= numItems - 1;
  return (
    <Fragment>
      <LeftNavButton
        disabled={previousDisabled}
        Icon={IconPrevious}
        onClick={() => setPosition(position - 1)}
      />
      {children}
      <RightNavButton
        disabled={nextDisabled}
        Icon={IconNext}
        onClick={() => setPosition(position + 1)}
      />
    </Fragment>
  );
};

NavigationButtons.propTypes = {
  children: T.node,
  numItems: T.number.isRequired,
  position: T.number.isRequired,
  setPosition: T.func.isRequired,
};

export default NavigationButtons;