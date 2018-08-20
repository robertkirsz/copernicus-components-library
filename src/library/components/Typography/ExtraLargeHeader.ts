import styled from 'styled-components';

// prettier-ignore
export const ExtraLargeHeader = styled<{ center?: boolean }, 'h1'>('h1')`
  margin: 0;
  
  font: bold 8rem/10rem Nunito, sans-serif;
  letter-spacing: -2px;
  
  ${props => props.center && 'text-align: center;'}
`;
