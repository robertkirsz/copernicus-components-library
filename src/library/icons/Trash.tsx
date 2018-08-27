import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const Trash: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M16.105 22h-8.21L6.117 6h11.766l-1.778 16zM9 2.62c0-.341.278-.62.62-.62h4.76c.341 0 .62.279.62.62V4H9V2.62zM17 4V2.62A2.624 2.624 0 0 0 14.38 0H9.62A2.624 2.624 0 0 0 7 2.62V4H3a1 1 0 0 0 0 2h1.105l1.901 17.11A1 1 0 0 0 7 24h10a1 1 0 0 0 .994-.89L19.895 6H21a1 1 0 0 0 0-2h-4z"
    />
  </svg>
);

Trash.defaultProps = defaultIconProps;

export default Trash;
