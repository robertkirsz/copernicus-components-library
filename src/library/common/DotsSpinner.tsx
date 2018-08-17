import * as React from 'react';
import styled, { keyframes } from 'styled-components';

const DotsSpinner = (props: any) => (
  <Wrapper {...props}>
    <Dot />
    <Dot />
    <Dot />
  </Wrapper>
);

export default DotsSpinner;

// prettier-ignore
const dotAnimation = keyframes`
  0%, 80%, 100% {
    opacity: 0;
    transform: scale(0.8);
  }

  40% {
    opacity: 1;
    transform: scale(1);
  }
`;

// prettier-ignore
export const Wrapper = styled<{ layer: boolean }, 'span'>('span')`
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.layer && `
    position: absolute;
    top: 0; right: 0; bottom: 0; left: 0;
  `}
`;

// prettier-ignore
export const Dot = styled.span`
  display: block;
  width: 10px;
  height: 10px;

  background: currentColor;
  border-radius: 50%;

  animation: ${dotAnimation} 1s infinite;

  &:nth-child(1) {
    animation-delay: -0.32s;
  }

  &:nth-child(2) {
    animation-delay: -0.16s;
  }

  &:not(:first-child) {
    margin-left: 7px;
  }
`;
