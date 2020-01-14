import styled from 'styled-components';

export const StyledSpan = styled.span`
  color: ${({ color }) => color || ''};
  font-family: ${({ font }) => font || ''};
  font-size: ${({ size }) => size || '1.4rem'};
  font-weight: ${({ weight }) => weight || ''};
  margin: ${({ position }) => position === 'start' ? '0 -1rem 0 -0.3rem' : '0 -0.3rem 0 -1rem'};
`;
