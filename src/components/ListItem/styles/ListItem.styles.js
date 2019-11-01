import React from 'react';
import styled from 'styled-components';
import ListItemText from '@material-ui/core/ListItemText';

export const StyledListItemText = styled((props) => (
  <ListItemText
    classes={{ primary: 'primary' }}
    {...props}
  />
))`
  & .primary {
    font-family: 'Overpass', sans-serif;
    font-size: 1.4rem;
  }
`;
