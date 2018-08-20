import styled from 'styled-components';

// prettier-ignore
export const LargeHeader = styled<{ center?: boolean }, 'h2'>('h2')`
  margin: 0;
  padding: 0;
  
  font: 600 42px/52px 'Open Sans', sans-serif;
  letter-spacing: -1px;
  ${props => props.center && 'text-align: center;'}
`;
