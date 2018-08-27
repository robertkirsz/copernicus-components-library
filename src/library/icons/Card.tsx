import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const Card: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M21.353 18H2.648A.648.648 0 0 1 2 17.352V10h20v7.352c0 .357-.29.648-.647.648M2.648 6h18.705c.357 0 .647.29.647.647V8H2V6.647C2 6.29 2.29 6 2.648 6m18.705-2H2.648A2.65 2.65 0 0 0 0 6.647v10.705A2.65 2.65 0 0 0 2.648 20h18.705A2.65 2.65 0 0 0 24 17.352V6.648A2.65 2.65 0 0 0 21.353 4"
    />
  </svg>
);

Card.defaultProps = defaultIconProps;

export default Card;
