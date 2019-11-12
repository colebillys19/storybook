import styled from 'styled-components';

import { msBrightPurple } from '../../../utils/defaultStyleHelper';

export const StyledCarouselItem = styled.div`
  cursor: pointer;
  flex-shrink: 0;
  padding: 0 0.5rem;
  transition: transform 0.2s ease-in-out;
  width: ${({ width }) => `${width}%` || null};
  &:hover {
    > * {
      color: ${msBrightPurple};
    }
    transform: translateY(-0.5rem);
  }
`;

export const StyledImage = styled.img`
  display: block;
  width: 100%;
`;

export const StyledItemTitle = styled.h3`
  font-size: 1.6rem;
  font-weight: 500;
  margin: 1rem 0 0.5rem;
  text-align: center;
`;
