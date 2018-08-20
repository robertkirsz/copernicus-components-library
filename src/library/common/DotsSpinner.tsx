import * as React from 'react';
import styled, { keyframes } from 'styled-components';

interface DotsSpinnerProps {
  layer?: boolean;
  className?: string;
}

const DotsSpinner: React.SFC<DotsSpinnerProps> = props => (
  <span {...props}>
    <Dot />
    <Dot />
    <Dot />
  </span>
);

// prettier-ignore
const StyledDotsSpinner = styled<{ layer: boolean }>(({ layer, ...rest}) => <DotsSpinner {...rest} />)`
  display: flex;
  align-items: center;
  justify-content: center;

  ${props => props.layer && `
    position: absolute;
    top: 0;
    right: 0;
    bottom: 0;
    left: 0;
  `}
`;

export default StyledDotsSpinner;

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

const Dot = styled.span`
  display: block;
  width: 8px;
  height: 8px;

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
    margin-left: 8px;
  }
`;
