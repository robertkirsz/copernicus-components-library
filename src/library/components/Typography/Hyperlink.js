import styled from 'styled-components';

import baseStyles from './TypographyBase';

// prettier-ignore
export const Hyperlink = styled.a`
  ${baseStyles}
  display: inline-block;

  color: ${({ theme }) => theme.Hyperlink.color};
  font-size: inherit;
  font-family: 'Open Sans', sans-serif;
  font-weight: 600;
  line-height: inherit;
  text-decoration: none;

  cursor: pointer;
  user-select: none;
`;
