import styled from 'styled-components';

// prettier-ignore
export const SmallHeader = styled<{ center?: boolean }, 'h3'>('h3')`
  margin: 0;
  
  font: 700 3rem/4rem Nunito, sans-serif;
  
  ${props => props.center && 'text-align: center;'}
`;
