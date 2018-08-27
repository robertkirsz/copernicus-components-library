import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const CloseCircleSmall: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6m0-14c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8m3.216 4.781a.967.967 0 0 0-1.364.002L12 10.637l-1.852-1.854a.966.966 0 0 0-1.364-.002.96.96 0 0 0-.002 1.36L10.637 12l-1.855 1.858a.96.96 0 0 0 .002 1.361.964.964 0 0 0 1.364-.002L12 13.363l1.852 1.854a.964.964 0 0 0 1.364.002.96.96 0 0 0 .002-1.36L13.363 12l1.855-1.858a.96.96 0 0 0-.002-1.361"
    />
  </svg>
);

CloseCircleSmall.defaultProps = defaultIconProps;

export default CloseCircleSmall;
