import styled from 'styled-components';

// prettier-ignore
export const Hyperlink = styled.a`
  margin: 0;
  padding: 0;
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
