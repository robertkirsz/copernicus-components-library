import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const TrashSmall: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M15.08 18H8.92l-.833-9h7.826l-.833 9zM10 6.62c0-.341.278-.62.62-.62h2.76c.342 0 .62.279.62.62V7h-4v-.38zM16 7v-.38A2.624 2.624 0 0 0 13.38 4h-2.76A2.624 2.624 0 0 0 8 6.62V7H6a1 1 0 0 0 0 2h.08l.924 10.083A1 1 0 0 0 8 20h8a1 1 0 0 0 .997-.917L17.92 9H18a1 1 0 0 0 0-2h-2z"
    />
  </svg>
);

TrashSmall.defaultProps = defaultIconProps;

export default TrashSmall;
