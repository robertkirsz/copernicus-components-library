import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const Arrows: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M4.774 10.343a.958.958 0 0 1 0 1.373.996.996 0 0 1-.699.284.997.997 0 0 1-.7-.284L.29 8.686A.964.964 0 0 1 0 8c0-.257.105-.504.29-.687l3.087-3.029a1.002 1.002 0 0 1 1.398 0 .958.958 0 0 1 0 1.373L3.435 6.97h11.576a.98.98 0 0 1 .989.97.98.98 0 0 1-.989.972H3.316l1.458 1.431zm14.452 8l1.458-1.431H8.99A.98.98 0 0 1 8 15.94a.98.98 0 0 1 .989-.97h11.576l-1.34-1.314a.958.958 0 0 1 0-1.373 1.002 1.002 0 0 1 1.4 0l3.086 3.03c.185.182.29.429.29.686a.964.964 0 0 1-.29.686l-3.087 3.03a.997.997 0 0 1-.7.284.996.996 0 0 1-.698-.284.958.958 0 0 1 0-1.373z"
    />
  </svg>
);

Arrows.defaultProps = defaultIconProps;

export default Arrows;
