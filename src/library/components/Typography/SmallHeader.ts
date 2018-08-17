import styled from 'styled-components';

// prettier-ignore
export const SmallHeader = styled<{ center?: boolean }, 'h3'>('h3')`
  margin: 0;
  padding: 0;
  
  font: 600 26px/32px 'Open Sans', sans-serif;
  ${props => props.center && 'text-align: center;'}
`;
