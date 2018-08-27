import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const User: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M3.055 22c.5-4.494 4.32-8 8.945-8s8.446 3.506 8.945 8H3.055zM7 7c0-2.757 2.243-5 5-5s5 2.243 5 5-2.243 5-5 5-5-2.243-5-5zm8.983 5.75A6.994 6.994 0 0 0 19 7c0-3.86-3.14-7-7-7S5 3.14 5 7a6.994 6.994 0 0 0 3.017 5.75C3.916 14.348 1 18.338 1 23a1 1 0 0 0 1 1h20a1 1 0 0 0 1-1c0-4.661-2.915-8.652-7.017-10.25z"
    />
  </svg>
);

User.defaultProps = defaultIconProps;

export default User;
