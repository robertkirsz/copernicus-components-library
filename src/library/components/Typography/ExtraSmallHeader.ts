import styled from 'styled-components';

// prettier-ignore
export const ExtraSmallHeader = styled<{ center?: boolean }, 'h4'>('h4')`
  margin: 0;
  
  font: 700 2.25rem/3rem Nunito, sans-serif;
  
  ${props => props.center && 'text-align: center;'}
`;
