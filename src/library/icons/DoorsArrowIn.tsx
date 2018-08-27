import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const DoorsArrowIn: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M7 0h16a1 1 0 0 1 1 1v22a1 1 0 0 1-1 1H7a1 1 0 0 1-1-1v-7a1 1 0 0 1 2 0v6h14V2H8v5.875a1 1 0 0 1-2 0V1a1 1 0 0 1 1-1zm4.854 14.475L13.329 13H1a1 1 0 0 1 0-2h12.207l-1.354-1.353a1 1 0 1 1 1.415-1.414l3.121 3.12a1 1 0 0 1 0 1.415l-3.121 3.121a.996.996 0 0 1-1.414 0 1 1 0 0 1 0-1.414z"
    />
  </svg>
);

DoorsArrowIn.defaultProps = defaultIconProps;

export default DoorsArrowIn;
