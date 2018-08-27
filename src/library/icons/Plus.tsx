import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const Plus: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M23.001 11.025l-10.002-.024L12.974 1a1 1 0 0 0-2 .002L11 10.999l-9.998-.025H1a1 1 0 0 0-.001 2l10.002.024.024 10.003a1 1 0 0 0 1 .999h.001a1 1 0 0 0 1-1.001L13 13l9.998.024H23a1 1 0 0 0 .001-2"
    />
  </svg>
);

Plus.defaultProps = defaultIconProps;

export default Plus;
