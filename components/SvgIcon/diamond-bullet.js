import * as React from "react";
const SvgComponent = (props) => (
  <svg
    xmlns="http://www.w3.org/2000/svg"
    width={16}
    height={16}
    fill="none"
    color="#59B077"
    viewBox="0 0 16 16"
    {...props}
  >
    <path fill="currentColor" d="M11.5 8 8 4.5 4.5 8 8 11.5 11.5 8Z" />
    <path
      fill="currentColor"
      fillRule="evenodd"
      d="m8 0 8 8-8 8-8-8 8-8Zm0 1.5L14.5 8 8 14.5 1.5 8 8 1.5Z"
      clipRule="evenodd"
    />
  </svg>
);
export default SvgComponent;
