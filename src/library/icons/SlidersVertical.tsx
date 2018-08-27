import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const SlidersVertical: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M17 14c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2m6-3h-2.131A4.004 4.004 0 0 0 17 8a4.004 4.004 0 0 0-3.868 3H1a1 1 0 0 0 0 2h12.132A4.004 4.004 0 0 0 17 16a4.004 4.004 0 0 0 3.869-3H23a1 1 0 0 0 0-2M7 2c1.103 0 2 .897 2 2s-.897 2-2 2-2-.897-2-2 .897-2 2-2M1 5h2.131A4.004 4.004 0 0 0 7 8a4.004 4.004 0 0 0 3.868-3H23a1 1 0 0 0 0-2H10.868A4.004 4.004 0 0 0 7 0a4.004 4.004 0 0 0-3.869 3H1a1 1 0 0 0 0 2m6 17c-1.103 0-2-.897-2-2s.897-2 2-2 2 .897 2 2-.897 2-2 2m16-3H10.868A4.004 4.004 0 0 0 7 16a4.004 4.004 0 0 0-3.869 3H1a1 1 0 0 0 0 2h2.131A4.004 4.004 0 0 0 7 24a4.004 4.004 0 0 0 3.868-3H23a1 1 0 0 0 0-2"
    />
  </svg>
);

SlidersVertical.defaultProps = defaultIconProps;

export default SlidersVertical;
