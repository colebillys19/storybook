import styled from 'styled-components';
import FlatIconButton from '../../Button/FlatIconButton';

export const BannerWrapper = styled.div`
  align-items: center;
  background-color: ${({ color }) => color || 'transparent'};
  border-radius: 0.4rem;
  color: white;
  display: flex;
  font-size: 1.5rem;
  height: ${({ displayState }) => displayState ? 'auto' : '0'};
  overflow: hidden;
  padding: ${({ displayState }) => displayState ? '0.5rem' : '0'};;
  transition: all .25s;
`;

export const IconWrapper = styled.div`
  margin-left: 2rem;
  position: relative;
  top: 0.2rem;
`;

export const CloseButton = styled(FlatIconButton)`
  background-color: transparent;
  color: white;
  margin-left: auto;
  min-width: 3rem;
  padding: 0.6rem 1.6rem;
`;

export const Text = styled.div`
  margin: 0rem 1rem;
`;
