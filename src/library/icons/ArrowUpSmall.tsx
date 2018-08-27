import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const ArrowUpSmall: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M11.996 8c.256 0 .512.098.707.293l7.004 6.98a1.002 1.002 0 0 1-1.414 1.416l-6.297-6.272-6.29 6.29a.999.999 0 0 1-1.414 0 1.002 1.002 0 0 1 0-1.415l6.997-6.999A.997.997 0 0 1 11.996 8"
    />
  </svg>
);

ArrowUpSmall.defaultProps = defaultIconProps;

export default ArrowUpSmall;
