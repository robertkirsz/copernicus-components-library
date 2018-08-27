import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const CirclePlus: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10m0-22C5.383 0 0 5.383 0 12c0 6.616 5.383 12 12 12 6.616 0 12-5.384 12-12 0-6.617-5.384-12-12-12m5.879 11.998a.966.966 0 0 0-.966-.963l-3.95.002.002-3.95a.966.966 0 0 0-.963-.966.96.96 0 0 0-.964.961l-.002 3.955-3.954.002a.96.96 0 0 0-.678 1.644.965.965 0 0 0 .683.283l3.95-.002-.002 3.949a.962.962 0 0 0 .963.966.96.96 0 0 0 .964-.961l.001-3.954 3.955-.002a.96.96 0 0 0 .96-.964"
    />
  </svg>
);

CirclePlus.defaultProps = defaultIconProps;

export default CirclePlus;
