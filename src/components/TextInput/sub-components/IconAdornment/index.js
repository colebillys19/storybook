import React from 'react';
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
  const styles = { color };

  // adjust placement for warning icon
  if (iconName === 'warning') {
    styles.position = 'relative';
    styles.bottom = onClick ? '0.2rem' : '0.1rem';
  }

  const handleMouseDown = (e) => {
    e.preventDefault();
    e.stopPropagation();
  };

  const icon = IconDictionary(iconName, 'adornment', styles);

  if (onClick) {
    return (
      <StyledIconButton
        hoverColor={hoverColor}
        onClick={onClick}
        onMouseDown={handleMouseDown}
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
