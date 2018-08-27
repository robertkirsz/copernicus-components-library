import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const Glass: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M2 10c0-4.411 3.589-8 8-8s8 3.589 8 8-3.589 8-8 8-8-3.589-8-8m21.707 12.293l-5.968-5.969A9.951 9.951 0 0 0 20 10c0-5.514-4.486-10-10-10S0 4.486 0 10s4.486 10 10 10c2.398 0 4.6-.85 6.324-2.261l5.97 5.968a.996.996 0 0 0 1.413 0 1 1 0 0 0 0-1.414"
    />
  </svg>
);

Glass.defaultProps = defaultIconProps;

export default Glass;
