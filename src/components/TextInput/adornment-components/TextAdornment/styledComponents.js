import styled from 'styled-components';

export const StyledSpan = styled.span`
  color: ${({ color }) => color || ''};
  font-family: ${({ font }) => font || ''};
  font-size: ${({ size }) => size || ''};
  font-weight: ${({ weight }) => weight || ''};
`;
