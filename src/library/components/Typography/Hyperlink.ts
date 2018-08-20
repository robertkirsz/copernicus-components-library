import styled from 'styled-components';

// prettier-ignore
export const Hyperlink = styled.a`
  color: ${({ theme }) => theme.Hyperlink.color};
  font-weight: 600;
  font-size: inherit;
  line-height: inherit;
  font-family: Nunito, sans-serif;
  text-decoration: none;

  cursor: pointer;
  user-select: none;
`;
