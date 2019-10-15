import React from 'react';
import SvgIcon from '@material-ui/core/SvgIcon';

function Profile(props) {
  return (
    <SvgIcon {...props} viewBox="0 0 500 500">
      <ellipse cx="247.9" cy="250" fill="none" rx="204.1" ry="199" />
      <path d="M250 477C124.6 477 23 375.1 23 250 23 124.6 124.6 23 250 23s227 101.6 227 227c0 124.9-101.3 227-227 227zm89.9-210c-22.3 24.3-54.5 39.8-89.9 39.8s-67.6-15.4-89.9-39.8c-43.1 5.8-62.3 47.9-68.9 95.3 35.2 49.7 93.2 82.3 158.9 82.3s123.6-32.7 158.9-82.3c-6.7-47.4-26-89.5-69.1-95.3zM250 87.8c-53.7 0-97.3 43.6-97.3 97.3s43.6 97.3 97.3 97.3 97.3-43.6 97.3-97.3-43.6-97.3-97.3-97.3z" />
    </SvgIcon>
  );
}

export default Profile;
