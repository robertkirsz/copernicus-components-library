import styled from 'styled-components';

// prettier-ignore
export const LargeHeader = styled<{ center?: boolean }, 'h2'>('h2')`
  margin: 0;
  
  font: 700 5rem/6rem Nunito, sans-serif;
  letter-spacing: -1px;
  
  ${props => props.center && 'text-align: center;'}
`;
