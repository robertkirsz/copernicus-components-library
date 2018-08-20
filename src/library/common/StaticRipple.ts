import styled from 'styled-components';

const StaticRipple = styled.div`
  width: 100%;
  height: 100%;

  position: absolute;
  top: 0;
  left: 0;

  background: transparent;
  border-radius: 50%;
  opacity: 0;

  transition: 0.2s;
  pointer-events: none;
  z-index: -1;
`;

export default StaticRipple;
