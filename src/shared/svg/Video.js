import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function Video(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 500 500">
      <path d="M250 2C113.6 2 3 112.6 3 249s110.6 247 247 247 247-110.6 247-247S386.4 2 250 2zm0 447.7c-110.8 0-200.7-89.9-200.7-200.7 0-110.8 89.9-200.7 200.7-200.7S450.7 138.2 450.7 249c0 110.8-89.9 200.7-200.7 200.7zm-61.8-308.8L373.5 249 188.2 357.1V140.9z" />
    </SvgIcon>
  );
}

export default Video;
