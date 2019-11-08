import styled from 'styled-components';

export const StyledImage = styled.img`
  display: block;
  width: 100%;
`;

export const StyledItemWrapper = styled.div`
  cursor: pointer;
  margin: 2rem 1rem 0;
  transition: transform 0.3s ease-in-out;
  width: 100%;
  &:hover {
    transform: translateY(-1.5rem);
  }
`;

export const StyledItemTitle = styled.div`
  font-size: 1.5rem;
  font-weight: 500;
  text-transform: uppercase;
  margin: 1rem 0;
`;
