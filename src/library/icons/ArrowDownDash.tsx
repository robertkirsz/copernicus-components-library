import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const ArrowDownDash: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M11.232 19.69l-4.121-4.122a.997.997 0 0 1 0-1.414.999.999 0 0 1 1.414 0L11 16.63V1a1 1 0 0 1 2 0v15.703l2.353-2.548a.999.999 0 1 1 1.414 1.414l-4.12 4.122a1 1 0 0 1-1.415 0zM3 22h18a1 1 0 0 1 0 2H3a1 1 0 0 1 0-2z"
    />
  </svg>
);

ArrowDownDash.defaultProps = defaultIconProps;

export default ArrowDownDash;
