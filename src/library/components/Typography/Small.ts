import styled from 'styled-components';

// prettier-ignore
export const Small = styled<{ center?: boolean }, 'small'>('small')`
  font: 400 1.5rem/2rem 'Open Sans', sans-serif;
  
  ${props => props.center && 'text-align: center;'}
`;
