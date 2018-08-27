import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const XXX: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
    />
  </svg>
);

XXX.defaultProps = defaultIconProps;

export default XXX;
