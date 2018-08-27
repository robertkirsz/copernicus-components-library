import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const CloseCircle: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M12 22C6.486 22 2 17.514 2 12S6.486 2 12 2s10 4.486 10 10-4.486 10-10 10m0-22C5.383 0 0 5.383 0 12c0 6.616 5.383 12 12 12 6.616 0 12-5.384 12-12 0-6.617-5.384-12-12-12m5.216 6.781a.966.966 0 0 0-1.364.002L12 10.638 8.148 6.783a.966.966 0 0 0-1.364-.002.96.96 0 0 0-.002 1.36l3.855 3.86-3.855 3.857a.962.962 0 1 0 .683 1.641.961.961 0 0 0 .683-.282L12 13.362l3.852 3.855a.962.962 0 0 0 .683.283.961.961 0 0 0 .683-1.642L13.363 12l3.855-3.858a.96.96 0 0 0-.002-1.36"
    />
  </svg>
);

CloseCircle.defaultProps = defaultIconProps;

export default CloseCircle;
