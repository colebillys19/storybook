import React from 'react';
import styled from 'styled-components';
import ListItem from '@material-ui/core/ListItem';

import { msHoverGrey } from '../../../utils/defaultStyleHelper';

export const StyledListItem = styled((props) => (
  <ListItem classes={{ root: 'root', selected: 'selected' }} {...props} />
))`
  &.root {
    display: ${({ bullet }) => bullet ? 'list-item' : 'block'};
    font-family: 'Overpass', sans-serif;
    font-size: 1.4rem;
    list-style-position: inside;
    padding: 0.5rem 1rem;
    margin: 0;
  }
  &.selected {
    background-color: ${msHoverGrey};
  }
`;

export const ContentWrapper = styled.span`
  position: relative;
  left: -0.7rem;
`;
