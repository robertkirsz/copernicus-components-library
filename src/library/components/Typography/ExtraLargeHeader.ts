import styled from 'styled-components';

// prettier-ignore
export const ExtraLargeHeader = styled<{ center?: boolean }, 'h1'>('h1')`
  margin: 0;
  padding: 0;
  
  font: 600 68px/80px 'Open Sans', sans-serif;
  letter-spacing: -2px;
  ${props => props.center && 'text-align: center;'}
`;
