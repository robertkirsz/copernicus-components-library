import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const DoorsArrowOut: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M1 24a1 1 0 0 1-1-1V1a1 1 0 0 1 1-1h15a1 1 0 0 1 1 1v7a1 1 0 0 1-2 0V2H2v20h13v-5.875a1 1 0 0 1 2 0V23a1 1 0 0 1-1 1H1zm18.171-9.646l1.475-1.475H8.318a1 1 0 0 1 0-2h12.207l-1.354-1.354a1 1 0 1 1 1.414-1.414l3.122 3.121a1 1 0 0 1 0 1.414l-3.122 3.121a.996.996 0 0 1-1.414 0 1 1 0 0 1 0-1.413z"
    />
  </svg>
);

DoorsArrowOut.defaultProps = defaultIconProps;

export default DoorsArrowOut;
