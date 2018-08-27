import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const ArrowDownSmall: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M12.003 17a.996.996 0 0 1-.707-.293l-7.003-6.98A1.002 1.002 0 0 1 5.707 8.31l6.296 6.272 6.29-6.29a.999.999 0 0 1 1.414 0c.39.391.39 1.024 0 1.415l-6.997 6.999a.997.997 0 0 1-.707.293"
    />
  </svg>
);

ArrowDownSmall.defaultProps = defaultIconProps;

export default ArrowDownSmall;
