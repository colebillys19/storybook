import React, { useState } from 'react';
import T from 'prop-types';

import IconDictionary from '../../../../utils/IconDictionary';
import { IconWrapper, StyledIconButton } from './styledComponents';

const IconAdornment = ({
  color,
  hoverColor,
  iconName,
  onClick,
  ...props
}) => {
  const [buttonMouseDown, toggleButtonMouseDown] = useState(false);

  const styles = { color };

  // adjust placement for warning icon
  if (iconName === 'warning') {
    styles.position = 'relative';
    styles.bottom = onClick ? '0.2rem' : '0.1rem';
  }

  const handleMouseDown = (e) => {
    e.preventDefault();
    toggleButtonMouseDown(true);
  };

  const handleMouseUp = (e) => {
    e.preventDefault();
    if (buttonMouseDown) {
      onClick(e);
    }
    toggleButtonMouseDown(false);
  };

  const resetClickState = (e) => {
    e.preventDefault();
    toggleButtonMouseDown(false);
  };

  const icon = IconDictionary(iconName, 'adornment', styles);

  if (onClick) {
    return (
      <StyledIconButton
        buttonMouseDown={buttonMouseDown}
        hoverColor={hoverColor}
        onBlur={resetClickState}
        onMouseDown={handleMouseDown}
        onMouseOut={resetClickState}
        onMouseUp={handleMouseUp}
        size="small"
        {...props}
      >
        {icon}
      </StyledIconButton>
    );
  }
  return <IconWrapper {...props}>{icon}</IconWrapper>;
};

IconAdornment.propTypes = {
  color: T.string,
  hoverColor: T.string,
  iconName: T.string.isRequired,
  onClick: T.func,
  position: T.string.isRequired,
};

export default IconAdornment;
