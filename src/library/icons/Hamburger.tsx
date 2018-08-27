import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const Hamburger: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M21 13H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0 5H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2zm0-10H3a1 1 0 0 1 0-2h18a1 1 0 0 1 0 2z"
    />
  </svg>
);

Hamburger.defaultProps = defaultIconProps;

export default Hamburger;
