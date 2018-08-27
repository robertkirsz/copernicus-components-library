import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const Close: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M12 10.552L5.755 4.301C5.354 3.9 4.703 3.9 4.3 4.3a1.02 1.02 0 0 0 0 1.447l6.249 6.252-6.25 6.255a1.02 1.02 0 0 0 0 1.447 1.031 1.031 0 0 0 1.455-.001L12 13.449l6.245 6.25c.402.4 1.051.4 1.453.002a1.02 1.02 0 0 0 .002-1.447L13.45 12l6.25-6.253A1.026 1.026 0 1 0 18.245 4.3L12 10.552z"
    />
  </svg>
);

Close.defaultProps = defaultIconProps;

export default Close;
