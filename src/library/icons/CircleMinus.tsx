import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const CircleMinus: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M2 12C2 6.486 6.486 2 12 2s10 4.486 10 10-4.486 10-10 10S2 17.514 2 12zm-2 0c0 6.616 5.383 12 12 12 6.616 0 12-5.384 12-12 0-6.617-5.384-12-12-12C5.383 0 0 5.383 0 12zm16.913-.965l-9.831.004a.96.96 0 0 0-.678 1.644.965.965 0 0 0 .683.283l9.831-.004a.96.96 0 0 0 .96-.964.966.966 0 0 0-.965-.963z"
    />
  </svg>
);

CircleMinus.defaultProps = defaultIconProps;

export default CircleMinus;
