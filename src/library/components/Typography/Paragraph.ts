import styled from 'styled-components';

// prettier-ignore
export const Paragraph = styled<{ center?: boolean }, 'p'>('p')`
  margin: 0;
  padding: 0;
  
  font: 400 16px/26px 'Open Sans', sans-serif;
  ${props => props.center && 'text-align: center;'}
`;
