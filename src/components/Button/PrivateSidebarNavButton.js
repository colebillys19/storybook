/* eslint-disable quotes */
/**
*
* PrivateSidebarNavButton
* @description Private Sidebar Nav Button used throughout the Silver Site
* API Usage: {
*   Icon: (SVG) Icon to render if provided. Icons should be selected and styled through the
*         iconDictionary before reaching this component.
*   label: Button label
*   onClick: onClick handler
*   styling: Styling object to override default styles.
* }
*/
import React from 'react';
import styled from 'styled-components';
import { Link } from 'react-router-dom';
import {
  ssDarkGrey,
  ssMainBlue,
  ssMainBlueHover,
  ssYellow,
} from '../../shared/defaultStyleHelper';
import BaseButton from './BaseButton';

const sidebarStyles = {
  currentBackgroundColor: {
    desktop: ssMainBlueHover,
    mobile: 'transparent',
  },
  hoverColor: {
    desktop: ssMainBlue,
    mobile: 'transparent',
  },
  iconColors: {
    desktop: ssYellow,
    mobile: ssMainBlue,
  },
  labelColors: {
    desktop: 'white',
    mobile: ssDarkGrey,
  },
  margin: {
    desktop: '4rem',
    mobile: '2rem',
  },
  stripeCurrentColor: {
    desktop: ssYellow,
    mobile: ssMainBlueHover,
  },
};
/* eslint-disable react/react-in-jsx-scope */
const PrivateSidebarNavButton = styled(({ currentPage, route, ...restProps }) => (
  <BaseButton component={Link} to={route} {...restProps} />))`
  ::before {
    background-color: ${(({ currentPage, role }) => currentPage ?
    (sidebarStyles.stripeCurrentColor[role] || ssYellow) : null)};
    content: ${(({ currentPage }) => currentPage ? "' '" : null)};
    left: ${(({ currentPage }) => currentPage ? '0' : null)};
    padding: ${(({ currentPage }) => currentPage ? '2.74rem 0.5rem 2.72rem' : null)};
    position: ${(({ currentPage }) => currentPage ? 'absolute' : null)};
    top: ${(({ currentPage }) => currentPage ? '0' : null)};
  }
  &:active {
    box-shadow: none;
  }
  &:hover {
    background-color: ${(({ role }) => sidebarStyles.hoverColor[role] || 'transparent')};
  };

  & .label {
    color: ${(({ role }) => sidebarStyles.labelColors[role] || 'white')};
    justify-content: flex-start;
    margin-left: ${(({ role }) => sidebarStyles.margin[role] || '4rem')};
    .styled-icon {
      color: ${(({ role }) => sidebarStyles.iconColors[role] || ssYellow)};
    }
  }

  &:first-child {
    border-top: ${(({ currentPage }) => currentPage ?
    'none' : '0.1rem solid rgba(255, 255, 255, 0.1)')};
  }

  background-color: ${(({ currentPage, role }) => currentPage ?
    sidebarStyles.currentBackgroundColor[role] : 'transparent')};
  border-bottom: ${(({ currentPage }) => currentPage ?
    'none' : '0.1rem solid rgba(255, 255, 255, 0.1)')};
  border-radius: 0;
  margin: 0;
  padding: 1.5rem 0.5rem;
  position: relative;
  width: 100%;
`;

export default PrivateSidebarNavButton;
