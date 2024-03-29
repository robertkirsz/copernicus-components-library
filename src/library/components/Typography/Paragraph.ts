import styled from 'styled-components';

// prettier-ignore
export const Paragraph = styled<{ center?: boolean }, 'p'>('p')`
  margin: 0;
  
  font: 400 2rem/3rem 'Open Sans', sans-serif;
  
  ${props => props.center && 'text-align: center;'}
`;
