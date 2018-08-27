import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const CloseSmall: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M12 10.552L7.755 6.301C7.354 5.9 6.703 5.9 6.3 6.3a1.02 1.02 0 0 0 0 1.447l4.249 4.252-4.25 4.255a1.02 1.02 0 0 0 0 1.447 1.031 1.031 0 0 0 1.455-.001L12 13.449l4.245 4.25c.402.4 1.051.4 1.453.002a1.02 1.02 0 0 0 .002-1.447L13.45 12l4.25-4.253A1.026 1.026 0 1 0 16.245 6.3L12 10.552z"
    />
  </svg>
);

CloseSmall.defaultProps = defaultIconProps;

export default CloseSmall;
