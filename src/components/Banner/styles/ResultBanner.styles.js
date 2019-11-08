import styled from 'styled-components';
import FlatIconButton from '../../Button/FlatIconButton';

export const BannerWrapper = styled.div`
  align-items: center;
  background-color: ${({ color }) => color || 'transparent'};
  border-radius: 0.4rem;
  color: white;
  display: flex;
  font-size: 1.5rem;
  height: ${({ displayState }) => (displayState ? 'auto' : '0')};
  justify-content: space-between;
  overflow: hidden;
  padding: ${({ displayState }) => (displayState ? '1rem 0' : '0')};
  transition: all 0.25s;
`;

export const CloseButton = styled(FlatIconButton)`
  background-color: transparent;
  color: white;
  padding: 0.5rem;
  margin: 0 1.4rem 0 0;
  min-width: 0rem;
`;

export const Content = styled.div`
  display: flex;
  align-items: center;
  margin: 0 0 0 2rem;
  span {
    margin-left: 1rem;
  }
`;
