import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const Chat: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M12 22.041H5.792v-1.91a.5.5 0 0 0-.174-.378l-.167-.144A10.035 10.035 0 0 1 1.96 12C1.958 6.463 6.462 1.958 12 1.958c5.537 0 10.041 4.505 10.041 10.042S17.538 22.041 12 22.041M12 0C5.383 0 0 5.383 0 12c0 3.331 1.395 6.52 3.833 8.788V23.5a.5.5 0 0 0 .5.5H12c6.616 0 12-5.384 12-12 0-6.617-5.384-12-12-12M8 10.5c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5m4 0c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5m4 0c-.827 0-1.5.673-1.5 1.5s.673 1.5 1.5 1.5 1.5-.673 1.5-1.5-.673-1.5-1.5-1.5"
    />
  </svg>
);

Chat.defaultProps = defaultIconProps;

export default Chat;
