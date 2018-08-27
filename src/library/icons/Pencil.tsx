import * as React from "react";

import { IconProps, defaultIconProps } from "../types";

const Pencil: React.SFC<IconProps> = ({ fill, ...props }) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width="24"
    height="24"
    viewBox="0 0 24 24"
    {...props}
  >
    <path
      fill={fill}
      d="M21.029 7.657l-.533.533-4.683-4.687.536-.536a3.314 3.314 0 1 1 4.68 4.69zM6.666 22.001H1.998v-4.672l1.08-1.081 4.67 4.672L6.666 22zm2.496-2.493l-4.67-4.674L14.4 4.917l4.681 4.685-9.919 9.906zM24 5.314a5.312 5.312 0 0 0-9.064-3.76L.292 16.208a1.001 1.001 0 0 0-.292.707v6.086a1 1 0 0 0 .999 1h6.08a1 1 0 0 0 .707-.293l2.081-2.08h.001l11.316-11.3.02-.016.015-.02 1.22-1.22A5.282 5.282 0 0 0 24 5.315z"
    />
  </svg>
);

Pencil.defaultProps = defaultIconProps;

export default Pencil;
