import styled from 'styled-components';

export const CarouselWrapper = styled.div`
  display: flex;
  justify-content: space-between;
  margin: 0 auto;
  width: 95%;
`;

export const ContentWrapper = styled.div`
  margin: 0 1.5rem;
  overflow: hidden;
  padding-top: 0.5rem;
  width: 100%;
`;

export const SlidingContainer = styled.div`
  display: flex;
  transform: ${({ position, width }) => `translateX(${-1 * width * position}%)`};
  transition: transform 0.7s ease-in-out;
`;
