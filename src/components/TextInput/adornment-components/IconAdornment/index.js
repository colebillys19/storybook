import React from 'react';
import T from 'prop-types';

import IconDictionary from '../../../../utils/IconDictionary';
import { IconWrapper, StyledIconButton } from './styledComponents';

const IconAdornment = ({
  color,
  hoverColor,
  iconName,
  onClick,
  position,
}) => {
  const styles = { color };
  // adjust placement for warning icon
  if (iconName === 'warning') {
    styles.position = 'relative';
    styles.bottom = onClick ? '0.2rem' : '0.1rem';
  }
  const icon = IconDictionary(iconName, 'adornment', styles);
  if (onClick) {
    return (
      <StyledIconButton
        hoverColor={hoverColor}
        position={position}
        size="small"
      >
        {icon}
      </StyledIconButton>
    );
  }
  return <IconWrapper position={position}>{icon}</IconWrapper>;
};

IconAdornment.propTypes = {
  color: T.string,
  hoverColor: T.string,
  iconName: T.string.isRequired,
  onClick: T.func,
  position: T.string.isRequired,
};

export default IconAdornment;
