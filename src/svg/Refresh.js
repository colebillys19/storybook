import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function Refresh(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 500 500">
      <path d="M212.4 457c-114.9 0-208-93.1-208-208s93.1-208 208-208v44.6c-43.6 0-84.7 17-115.6 47.9-30.9 30.8-47.9 71.9-47.9 115.5s17 84.7 47.9 115.5c30.9 30.9 71.9 47.9 115.6 47.9s84.7-17 115.6-47.9c23.7-23.7 39.3-53.5 45.2-85.8h-86.5l104-118.9 104 118.9h-76.4C403.8 379.5 317.1 457 212.4 457z" />
    </SvgIcon>
  );
}

export default Refresh;
