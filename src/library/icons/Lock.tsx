import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const Lock: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M6 22.004h12v-9.98H6v9.98zm2.992-17.02c0-1.648 1.355-2.988 3.021-2.988a2.995 2.995 0 0 1 2.995 2.988v5.045H8.992V4.984zM19 10.029h-1.992V4.984c0-2.748-2.24-4.984-4.994-4.984-2.77 0-5.022 2.236-5.022 4.984v5.045H5a1 1 0 0 0-1 .998v11.975A1 1 0 0 0 5 24h14a1 1 0 0 0 1-.998V11.027a1 1 0 0 0-1-.998zm-7 5.987a1 1 0 0 1 1 .998 1 1 0 0 1-2 0 1 1 0 0 1 1-.998m0 3.992a3 3 0 0 0 3-2.994 3 3 0 0 0-6 0 3 3 0 0 0 3 2.994"
    />
  </svg>
);

Lock.defaultProps = defaultIconProps;

export default Lock;
