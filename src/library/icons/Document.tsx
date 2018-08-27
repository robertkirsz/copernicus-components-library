import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const Document: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M19 22H5V2h7v6a1 1 0 0 0 1 1h6v13zm-.414-15H14V2.414L18.586 7zm2.121-.707l-6-6A1 1 0 0 0 14 0H4a1 1 0 0 0-1 1v22a1 1 0 0 0 1 1h16a1 1 0 0 0 1-1V7a1 1 0 0 0-.293-.707z"
    />
  </svg>
);

Document.defaultProps = defaultIconProps;

export default Document;
