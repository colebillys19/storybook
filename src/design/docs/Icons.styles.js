import styled from 'styled-components';

export const Wrapper = styled.div`
  display: grid;
  grid-template-rows: repeat(4, 8.5rem);
  grid-template-columns: repeat(4, 8.5rem);
`;

export const IconWrapper = styled.div`
  align-items: center;
  display: flex;
  flex-direction: column;
  justify-content: flex-start;
  padding: 1rem;
  span {
    margin-bottom: 0.2rem;
  }
`;
