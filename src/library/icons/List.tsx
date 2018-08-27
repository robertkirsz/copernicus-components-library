import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const List: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M3.5 10c.827 0 1.5.674 1.5 1.5 0 .828-.673 1.501-1.5 1.501s-1.5-.673-1.5-1.5S2.673 10 3.5 10zm0 5c.827 0 1.5.674 1.5 1.5 0 .828-.673 1.501-1.5 1.501s-1.5-.674-1.5-1.5C2 15.672 2.673 15 3.5 15zm0-10C4.327 5 5 5.673 5 6.5s-.673 1.501-1.5 1.501S2 7.328 2 6.501C2 5.672 2.673 5 3.5 5zM21 7.5H9a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2zm0 5H9a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2zm0 5H9a1 1 0 0 1 0-2h12a1 1 0 0 1 0 2z"
    />
  </svg>
);

List.defaultProps = defaultIconProps;

export default List;
