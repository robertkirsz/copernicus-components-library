import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const MinusSmall: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M7.001 11c-.553 0-1 .436-1.001.974 0 .538.446.975.999.976l10 .05A.988.988 0 0 0 18 12.026a.987.987 0 0 0-.999-.976l-10-.05z"
    />
  </svg>
);

MinusSmall.defaultProps = defaultIconProps;

export default MinusSmall;
