import { css } from 'styled-components';

const withUnit = value => (typeof value === 'number' ? `${value}px` : value);

// prettier-ignore
export default props => css`
  margin: 0;
  padding: 0;

  transition: color 0.3s;

  ${({ center }) => center && 'text-align: center;'}

  ${({ mTop }) => mTop && css`margin-top: ${withUnit(mTop)};`}
  ${({ mRight }) => mRight && css`margin-right: ${withUnit(mRight)};`}
  ${({ mBottom }) => mBottom && css`margin-bottom: ${withUnit(mBottom)};`}
  ${({ mLeft }) => mLeft && css`margin-left: ${withUnit(mLeft)};`}
`;
