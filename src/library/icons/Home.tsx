import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const Home: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M18.976 21h-4.019v-5c0-.552-.45-1-1.004-1h-4.02c-.55 0-.998.441-1.004.99L8.877 21H4.91V10.723l7.031-7.278 7.035 7.32V21zM12.67 1.308a1.008 1.008 0 0 0-1.45-.001L.28 12.63a.996.996 0 0 0 .029 1.414c.4.383 1.035.371 1.42-.028L2.9 12.803V22c0 .552.45 1 1.005 1h5.966c.55 0 .998-.442 1.004-.99l.053-5.01h2.02v5c0 .552.45 1 1.005 1h6.028c.555 0 1.005-.448 1.005-1v-9.144l1.283 1.335a1.005 1.005 0 0 0 1.421.031.997.997 0 0 0 .031-1.413L12.67 1.309z"
    />
  </svg>
);

Home.defaultProps = defaultIconProps;

export default Home;
