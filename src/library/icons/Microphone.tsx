import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const Microphone: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M18 7.974c-.552 0-1 .449-1 1.002v3.141c0 2.687-2.243 4.872-5 4.872s-5-2.185-5-4.872v-3.14a1.001 1.001 0 1 0-2 0v3.14c0 3.457 2.614 6.318 6 6.797v3.083h-1A1.001 1.001 0 0 0 10 24h4a1.001 1.001 0 0 0 0-2.003h-1v-3.083c3.387-.48 6-3.34 6-6.797v-3.14c0-.554-.448-1.003-1-1.003m-8-3.968c0-1.104.897-2.003 2-2.003s2 .899 2 2.003v7.936a2.004 2.004 0 0 1-2 2.003c-1.103 0-2-.898-2-2.003V4.006zm2 11.942c2.206 0 4-1.797 4-4.006V4.006A4.008 4.008 0 0 0 12 0C9.794 0 8 1.797 8 4.006v7.936a4.008 4.008 0 0 0 4 4.006z"
    />
  </svg>
);

Microphone.defaultProps = defaultIconProps;

export default Microphone;
