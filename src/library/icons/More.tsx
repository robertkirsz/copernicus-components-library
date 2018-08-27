import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const More: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M12 10c1.103 0 2 .898 2 2.001 0 1.103-.897 2-2 2-1.102 0-2-.897-2-2S10.898 10 12 10zm0 6c1.103 0 2 .898 2 2.001 0 1.102-.897 2-2 2-1.102 0-2-.898-2-2 0-1.103.898-2.001 2-2.001zm0-12c1.103 0 2 .898 2 2.001 0 1.103-.897 2-2 2-1.102 0-2-.897-2-2S10.898 4 12 4z"
    />
  </svg>
);

More.defaultProps = defaultIconProps;

export default More;
