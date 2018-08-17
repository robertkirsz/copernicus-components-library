import styled from 'styled-components';

import baseStyles from './TypographyBase';

// prettier-ignore
export const Small = styled<{ center?: boolean }, 'small'>('small')`
  margin: 0;
  padding: 0;
  
  font: 400 12px/20px 'Open Sans', sans-serif;
  ${props => props.center && 'text-align: center;'}
`;
