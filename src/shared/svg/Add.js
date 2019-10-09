import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function Add(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 500 500">
      <path d="M251 4C116.8 4 8 112.8 8 247s108.8 243 243 243 243-108.8 243-243S385.2 4 251 4zm14.6 257.6v166.1H237V261.6H79.4v-26.8H237V69.5h28.6v165.3h158v26.8h-158z" />
    </SvgIcon>
  );
}

export default Add;
