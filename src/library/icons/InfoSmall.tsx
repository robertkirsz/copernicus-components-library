import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const InfoSmall: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6m0-14c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8m0 6a1.001 1.001 0 0 0 0-2 1.001 1.001 0 0 0 0 2m.01 1.082c-.552 0-1 .448-1 1.001l.014 2.888a1 1 0 1 0 2.002-.004l-.015-2.885c0-.553-.448-1-1-1"
    />
  </svg>
);

InfoSmall.defaultProps = defaultIconProps;

export default InfoSmall;
