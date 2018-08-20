import styled from 'styled-components';

// prettier-ignore
export const Subtitle = styled<{ center?: boolean }, 'h5'>('h5')`
  margin: 0;
  
  font: 600 2rem/3rem 'Open Sans', sans-serif;
  
  ${props => props.center && 'text-align: center;'}
`;
