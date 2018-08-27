import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const Wallet: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M22 13v2h-2.031a.97.97 0 0 1-.969-.97v-.06c0-.535.436-.97.97-.97H22zm-1 7H3c-.551 0-1-.448-1-1V7.83c.313.111.65.172 1 .172h18c.552 0 1 .449 1 1v2h-2.03A2.974 2.974 0 0 0 17 13.97v.06A2.972 2.972 0 0 0 19.968 17H22v2c0 .552-.448 1-1 1zM3 4h16c.552 0 1 .449 1 1v1.001H3a1.001 1.001 0 0 1 0-2zm18.986 2.168c.009-.054.014-.11.014-.168V5c0-1.655-1.346-3-3-3H3C1.345 2 0 3.347 0 5v14c0 1.655 1.345 3 3 3h18c1.654 0 3-1.346 3-3V9.001a3.006 3.006 0 0 0-2.014-2.833z"
    />
  </svg>
);

Wallet.defaultProps = defaultIconProps;

export default Wallet;
