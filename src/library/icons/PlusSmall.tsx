import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const PlusSmall: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M12.999 11.001l-.024-4.002a1 1 0 0 0-2 .002l.024 3.998-3.998-.025a1 1 0 0 0-.002 2l4.002.025.024 4.002a1 1 0 0 0 2-.002l-.024-3.998 3.998.024a1 1 0 1 0 .002-2l-4.002-.024z"
    />
  </svg>
);

PlusSmall.defaultProps = defaultIconProps;

export default PlusSmall;
