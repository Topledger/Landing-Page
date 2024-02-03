import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={20}
    height={20}
    fill="none"
    {...props}
  >
    <path
      fill="#374151"
      d="M9.498 9.785c2.154 0 3.9-1.742 3.9-3.892A3.896 3.896 0 0 0 9.498 2a3.896 3.896 0 0 0-3.9 3.893 3.896 3.896 0 0 0 3.9 3.892ZM9.5 10.253C5.912 10.253 3 13.107 3 17h13c0-3.893-2.912-6.747-6.5-6.747Z"
    />
  </svg>
);
export default SvgComponent;
