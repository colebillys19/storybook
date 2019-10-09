import styled from 'styled-components';
import FlatIconButton from '../../Button/FlatIconButton';
import { errorRed } from '../../../shared/defaultStyleHelper';

export const BannerWrapper = styled.div`
  align-items: center;
  background-color: ${errorRed};
  border-radius: 0.4rem;
  display: flex;
  height: ${({ displayState }) => displayState ? 'auto' : '0'};
  opacity: 0.8;
  overflow: hidden;
  transition: all .25s;
`;

export const WarningIconWrapper = styled.div`
  margin-left: 2rem;
`;

export const CloseButton = styled(FlatIconButton)`
  background-color: transparent;
  margin-left: auto;
  min-width: 3rem;
  padding: 0.6rem 1.6rem;
`;

export const ErrorText = styled.div`
  margin: 0rem 1rem;
`;
