import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const EmojiSmileSmall: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M12 18c-3.309 0-6-2.691-6-6s2.691-6 6-6 6 2.691 6 6-2.691 6-6 6m0-14c-4.411 0-8 3.589-8 8s3.589 8 8 8 8-3.589 8-8-3.589-8-8-8m-1 6.5c0-.827-.673-1.5-1.5-1.5S8 9.673 8 10.5 8.673 12 9.5 12s1.5-.673 1.5-1.5M14.5 9c-.827 0-1.5.672-1.5 1.5 0 .827.673 1.5 1.5 1.5s1.5-.673 1.5-1.5c0-.828-.673-1.5-1.5-1.5m-.732 4.768c-.472.472-1.1.732-1.768.732-.668 0-1.295-.26-1.767-.732a1 1 0 0 0-1.415 1.414A4.47 4.47 0 0 0 12 16.5a4.47 4.47 0 0 0 3.182-1.318 1 1 0 1 0-1.414-1.414"
    />
  </svg>
);

EmojiSmileSmall.defaultProps = defaultIconProps;

export default EmojiSmileSmall;
