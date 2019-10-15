
import React from 'react';
import T from 'prop-types';
import styled, { keyframes } from 'styled-components';

const circleFadeDelay = keyframes`
  0%,
  39%,
  100% {
    opacity: 0;
  }
  40% {
    opacity: 1;
  }
`;

const Circle = ({ delay, rotate }) => {
  const CirclePrimitive = styled.div`
    height: 100%;
    left: 0;
    position: absolute;
    top: 0;
    transform: rotate(${rotate}deg);
    width: 100%;
    &:before {
      animation: ${circleFadeDelay} 1.2s infinite ease-in-out both;
      animation-delay: ${delay}s;
      background-color: #999;
      border-radius: 100%;
      content: '';
      display: block;
      height: 15%;
      margin: 0 auto;
      width: 15%;
    }
  `;
  return <CirclePrimitive />;
};

Circle.propTypes = {
  delay: T.number,
  rotate: T.number,
};

export default Circle;
