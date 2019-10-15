import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function Checkmark(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 500 500">
      <path d="M488 155.8L256.3 387.5 212.8 431c-5.7 5.8-13.8 9-21.8 9s-16-3.2-21.8-9l-43.5-43.5L9.9 271.7c-5.8-5.8-9-13.8-9-21.8s3.2-16 9-21.8l43.5-43.5c5.8-5.8 13.8-9 21.8-9s16 3.2 21.8 9l94 94.4L401 68.7c5.8-5.8 13.8-9 21.8-9s16 3.2 21.8 9l43.5 43.5c5.8 5.8 9 13.8 9 21.8-.1 8-3.3 16-9.1 21.8z" />
    </SvgIcon>
  );
}

export default Checkmark;
